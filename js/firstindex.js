document.addEventListener('DOMContentLoaded', () => {
    const helpBox = document.getElementById('help-box');
    const helpTextEl = document.getElementById('help-text');
    const helpButtons = document.getElementById('help-buttons');
    const yesBtn = document.getElementById('yes-help');
    const noBtn = document.getElementById('no-help');
    const questionList = document.getElementById('question-list');
    const answerBox = document.getElementById('answer-box');
  
    /*if (localStorage.getItem('hasVisitedHelp')) {
      helpBox.style.display = 'none';
      return;
    }*/
  
    const answers = {
      '網站卡住了怎麼辦？': '網站卡住了怎麼辦？  請嘗試重新整理頁面，或使用不同的瀏覽器再次進入。',
      '畫面顯示異常怎麼辦？': '畫面顯示異常怎麼辦？  請確認您使用的是最新版的 Chrome 或 Edge，並嘗試重新整理頁面。',
      '網站適合在哪些裝置上使用？': '網站適合在哪些裝置上使用？  本網站建議在桌上型或筆記型電腦上使用，部分手機裝置可能顯示不完全。',
      '試管遊戲可以儲存進度嗎？': '可以儲存進度嗎？  是的，您的遊戲進度會自動儲存在本機瀏覽器中。',
      '遊戲進度沒保存怎麼辦？': '進度沒保存怎麼辦？  請確認瀏覽器沒有開啟無痕模式，並允許本地儲存（localStorage）功能。',
      '有聲音效果嗎？可以關掉嗎？': '有聲音效果嗎？可以關掉嗎？  目前網站未實作聲音功能，若未來加入會提供開關設定。',
      '每次重新整理會重新開始嗎？': '每次重新整理會重新開始嗎？  若您未完成遊戲，重新整理後會重新開始；通關後資料會自動重置。',
      '這個網站會收集我的資料嗎？': '這個網站會收集我的資料嗎？  不會，所有資料僅儲存在您的裝置本地，不會傳送到伺服器。',
      '網站在手機上顯示不完整怎麼辦？': '建議重新整理頁面，或嘗試切換至橫向顯示。如果問題仍然存在，那就換一台手機吧。',
      '圖片／影片載入不出來怎麼辦？': '請檢查你的網路連線是否穩定，或重新整理頁面。如仍無法載入，可能是資源過期或已移除，請來信通知我們修正。',
      '某些字體看起來怪怪的或重疊了？': '請嘗試更換瀏覽器（例如 Chrome 或 Firefox），並清除快取。有些舊版瀏覽器可能不支援網站使用的字型或 CSS。',
      '網站無法開啟，顯示「找不到此頁面」或「錯誤 404」？': '你可能輸入了錯誤的網址，請確認網址拼寫正確，或返回首頁重新進入。',
      '網站顯示 SSL 警告或「不是安全的連線」？': '這代表網站尚未啟用 HTTPS（安全連線）。我們沒錢所以不會更換憑證，請暫時避免輸入個人資料。',
      '點擊某個按鈕或連結沒反應？': '可能是 JavaScript 尚未正確載入。請重新整理頁面或在旁邊放一包乖乖後再試一次。',
      '如何聯絡作者？': '如何聯絡作者？  如需進一步協助，請聯絡作者：chenbingyu@example.com。',
    };
  
    let isTyping = false; // 鎖定標記：是否正在打字

function typeText(element, message, callback) {
  if (isTyping) return; // 如果正在打字，忽略本次請求
  isTyping = true;

  element.textContent = '';
  let i = 0;
  const interval = setInterval(() => {
    element.textContent += message.charAt(i);
    i++;
    if (i >= message.length) {
      clearInterval(interval);
      isTyping = false; // 打字完成後解除鎖定
      if (callback) callback();
    }
  },30);/*字元輸出時間參數*/
}
  
    typeText(helpTextEl, '歡迎來到我的網站！請問您需要幫助嗎？', () => {
      helpButtons.style.display = 'block';
    });
  
    yesBtn.addEventListener('click', () => {
      helpButtons.style.display = 'none';
      typeText(helpTextEl, '很高興為您提供協助！', () => {
        questionList.style.display = 'block';
      });
      localStorage.setItem('hasVisitedHelp', 'true');
    });
  
    noBtn.addEventListener('click', () => {
      helpButtons.style.display = 'none';
      typeText(helpTextEl, '祝您瀏覽愉快！', () => {
        setTimeout(() => {
          helpBox.style.display = 'none';
        }, 2000);
      });
      localStorage.setItem('hasVisitedHelp', 'true');
    });
  
    document.querySelectorAll('.question-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = answers[btn.textContent] + '\n\n若仍有問題，歡迎聯絡作者：5b1g0031@stust.edu.tw';
        answerBox.style.display = 'block';
        typeText(answerBox, text);
      });
    });
  });
