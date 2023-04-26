// https://github.com/tastejs/hacker-news-pwas/blob/master/docs/api.md
const container = document.querySelector("#root");

// API 주소는 거의 바뀔 일이 없다
// 유료 API를 결제해서 접근할 때 회사에서 나만의 key를 API에 전달할텐데
// 깃허브에 올렸을 때 오픈 레퍼지토리로 하면 외부로 노출된다
// 환경 변수: API, key 등 중요한 정보를 담고 있다. 네이밍은 보통 대문자를 사용한다.
const NEWSLIST_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/$id.json";

// 현재 사용자가 보고있는 페이지의 정보와 화면에 보여질 아이템의 개수를 저장하는 객체
const store = {
  currentPage: 1,
  datasPerPage: 10,
};

// Ajax 요청해서 API 데이터 받아오는 함수
async function getData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("네트워크에 문제가 있습니다.");
    }
    return response.json();
  } catch (error) {
    console.log(error);
  }
}

// 뉴스 목록을 불러오는 함수
async function newsFeed() {
  const newsFeed = await getData(NEWSLIST_URL);
  // 총 몇개의 페이지가 만들어져야 하는지
  const totalPages = Math.ceil(newsFeed.length / store.datasPerPage);
  // DOM API를 최소한으로 하기 위해 배열을 생성하여 원소로 HTML 문자열을 할당한다
  const newsList = [];

  newsList.push('<ul class="bg-gray-500 flex flex-col gap-4 h-5/6 items-center justify-center pb-3">');

  // 현재 페이지를 기준으로 10개씩 리스트 렌더링
  for (let i = (store.currentPage - 1) * store.datasPerPage; i < store.currentPage * store.datasPerPage; i++) {
    // #: 현재 url 주소에 문자열을 추가
    // 앵커를 클릭하면 현재 URL에 #이 붙도록 한다. 이렇게 해야 라우터가 location.hash를 이용해 현재 페이지와 컨텐츠를 파악할 수 있다.
    newsList.push(`
			<li class="rounded-sm w-2/3 bg-white shadow p-3 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
				<a href="#/detail/${newsFeed[i].id}">${newsFeed[i].title} (${newsFeed[i].comments_count})</a>
			</li>
		`);
  }

  newsList.push("</ul>");

  // newsList 배열에 페이지네이션 추가
  let pageList = "";
  for (let i = 0; i < totalPages; i++) {
    pageList += `<li><a href="#/page/${i + 1} " class="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">${
      i + 1
    }</a></li>`;
  }

  newsList.push(
    `<nav class="bg-gray-500 flex flex-col gap-4 h-1/6 items-center justify-center">
			<ul class="list-style-none flex">
				${pageList}
			</ul>
		</nav>
		`
  );
  // join을 통해 원소를 한줄의 문자열로 합친다
  container.innerHTML = newsList.join("");
}

// 뉴스 디테일 페이지 구성 함수
async function newsDetail() {
  // Location 인터페이스는 객체가 연결된 장소(URL)를 표현
  // The hash property of the Location interface returns a string containing a '#' followed by the fragment identifier of the URL
  const id = location.hash.substring(9);
  const newsContent = await getData(CONTENT_URL.replace("$id", id));

  container.innerHTML = `
		<h1>${newsContent.title}</h1>
		<div><a href="#/page/${store.currentPage}">목록으로 돌아가기</a></div>
	`;
}

// 라우터: 화면을 중계하는 함수, 현재 url 주소를 통해 화면에 랜더링 해야할 화면을 결정하는 역할을 한다
function router() {
  const routePath = location.hash;
  // 만약 #값이 없다면 첫화면으로. location.hash는 # 하나만 있으면 빈 문자열로 인식
  if (routePath === "") {
    newsFeed();
  } else if (routePath.indexOf("#/page/") >= 0) {
    store.currentPage = parseInt(routePath.substring(7));
    newsFeed();
  } else {
    newsDetail();
  }
}

// The hashchange event is fired when the fragment identifier of the URL has changed
window.addEventListener("hashchange", router);

router();
