document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.code === 'Space') {
            console.log('Spaceキーが押されました');
            let retryButton = document.querySelector('#replay_btn'); // IDセレクタを使用
            if (retryButton) {
                console.log('再挑戦ボタンが見つかりました');
                retryButton.click();
            } else {
                console.log('再挑戦ボタンが見つかりませんでした');
            }
        }
    });
});
