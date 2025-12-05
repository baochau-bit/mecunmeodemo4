document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".bg-light form");
    const commentList = document.querySelector(".mb-5:nth-of-type(2)");

    //  Danh sách avatar online (bạn có thể thêm bao nhiêu cũng được)
    const avatarList = [
        "https://i.pravatar.cc/150?img=1",
        "https://i.pravatar.cc/150?img=2",
        "https://i.pravatar.cc/150?img=3",
        "https://i.pravatar.cc/150?img=4",
        "https://i.pravatar.cc/150?img=5",
        "https://i.pravatar.cc/150?img=6",
        "https://i.pravatar.cc/150?img=7",
        "https://i.pravatar.cc/150?img=8",
        "https://i.pravatar.cc/150?img=9",
        "https://i.pravatar.cc/150?img=10",
        "https://i.pravatar.cc/150?img=11",
        "https://i.pravatar.cc/150?img=12",
        "https://i.pravatar.cc/150?img=13",
        "https://i.pravatar.cc/150?img=14",
        "https://i.pravatar.cc/150?img=15"
    ];

    //  Hàm chọn avatar ngẫu nhiên
    function getRandomAvatar() {
        return avatarList[Math.floor(Math.random() * avatarList.length)];
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = form.querySelector("input[placeholder='Tên của bạn ']").value.trim();
        const email = form.querySelector("input[placeholder=' Email']").value.trim();
        const websiteElem = form.querySelector("input[placeholder='Website']");
        const website = websiteElem ? websiteElem.value.trim() : "";
        const comment = form.querySelector("textarea").value.trim();

        if (!name || !email || !comment) {
            alert("Vui lòng nhập đầy đủ Tên, Email và Nội dung bình luận!");
            return;
        }

        alert("Cảm ơn bạn đã để lại bình luận!");

        const today = new Date();
        const dateStr = today.toLocaleDateString("vi-VN");

        const randomAvatar = getRandomAvatar();

        const newComment = document.createElement("div");
        newComment.classList.add("d-flex", "mb-4");
        newComment.innerHTML = `
            <img src="${randomAvatar}" class="img-fluid"
                 style="width: 45px; height: 45px; border-radius: 50%; object-fit: cover;">
            <div class="ps-3">
                <h6><a href="#">${name}</a> <small><i>${dateStr}</i></small></h6>
                <p>${comment}</p>
                <button class="btn btn-sm btn-light">Reply</button>
            </div>
        `;

        commentList.appendChild(newComment);
        form.reset();
    });

    //  Nút "Mua ngay" sidebar
    const buyNowBtn = document.querySelector(".bg-light a.btn.btn-primary");
    if (buyNowBtn) {
        buyNowBtn.addEventListener("click", function (e) {
            e.preventDefault(); // Ngăn hành vi mặc định
            window.location.href = "chocun.html"; // Chuyển sang trang chocun.html
        });
    }
});
