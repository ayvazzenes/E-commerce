const commentReviewsFunc = function () {
  const commentStarsDOM = document.querySelectorAll(
    ".comment-form-rating .star"
  );
  commentStarsDOM.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      commentStarsDOM.forEach((star) => star.classList.remove("active"));
      item.classList.add("active");
    });
  });
};

const addNewCommentFunc = () => {
  let comments = [];
  let commentTextDOM = document.getElementById("comment-text");
  let commentNameDOM = document.getElementById("comment-name");
  let commentButtonDOM = document.getElementById("comment-button");
  let commentListDOM = document.querySelector(".comment-list");

  let commentTextValue = "";
  let commentNameValue = "";

  commentTextDOM.addEventListener("input", function (e) {
    commentTextValue = e.target.value;
  });
  commentNameDOM.addEventListener("input", function (e) {
    commentNameValue = e.target.value;
  });
  function addComment(e) {
    e.preventDefault();
    comments.push({ text: commentTextValue, name: commentNameValue });
    let result = "";
    comments.forEach((item) => {
      result += `
        <li class="comment-item">
            <div class="comment-avatar">
            <img src="img/avatars/avatar1.jpg" alt="" />
            </div>
            <div class="comment-text">
            <ul class="comment-star">
                <li class="bi bi-star-fill"></li>
                <li class="bi bi-star-fill"></li>
                <li class="bi bi-star-fill"></li>
                <li class="bi bi-star-fill"></li>
                <li class="bi bi-star-half"></li>
            </ul>
            <div class="comment-meta">
                <strong>${item.name}</strong>
                <span>-</span>
                <time>April 23, 2022</time>
            </div>
            <div class="comment-description">
                <p>
                ${item.text}
                </p>
            </div>
            </div>
      </li>
        `;
    });
    commentListDOM.innerHTML = result;
    commentNameDOM.value = "";
    commentTextDOM.value = "";
  }
  commentButtonDOM.addEventListener("click", addComment);
};

function commentsFunc() {
  commentReviewsFunc();
  addNewCommentFunc();
}
export default commentsFunc();
