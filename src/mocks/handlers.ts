import { http, HttpResponse } from 'msw';

const handlers = [
  http.post('/api/register', () => {
    return HttpResponse.json({});
  }),
  http.get('/api/register/policy', () => {
    return HttpResponse.json([
      {
        title: '會員加入協議',
        html: `<!DOCTYPE html>
            <html lang='zh-TW'>
                <head>
                    <meta charset='UTF-8'>
                    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
                    <title>會員加入協議</title>
                </head>
                
                <body>
                    <h1 style='font-weight: bold; font-size: 24px;'>會員加入協議</h1>
                    <p>本協議係由 [您的公司/組織名稱]（以下簡稱「本公司」）與您（以下簡稱「會員」）之間所訂立。本協議旨在規範會員加入本公司之條件與細則，請會員詳細閱讀以下內容：</p>
                
                    <h2 style='font-weight: bold; font-size: 20px;'>1. 加入資格</h2>
                    <p>1.1 會員必須年滿法定年齡，並具備依據本協議進行合法交易的能力。</p>
                    <p>1.2 會員須提供真實、準確且完整的個人資訊，並於資訊有變更時即時更新。</p>
                    <p>1.3 本公司得依據自身政策與標準自行決定是否接受會員之加入申請。</p>
                
                    <h2 style='font-weight: bold; font-size: 20px;'>2. 會員權利與義務</h2>
                    <p>2.1 會員享有本公司提供之服務，並且有權在遵守本協議及相關規定的前提下，自主決定使用服務的範圍與方式。</p>
                    <p>2.2 會員有義務保護自己的帳號和密碼安全，並對使用該帳號和密碼進行的一切活動承擔責任。</p>
                    <p>2.3 會員不得利用本公司提供的服務從事任何違法、違規或侵權行為，否則本公司有權終止或限制會員的服務。</p>
                
                    <h2 style='font-weight: bold; font-size: 20px;'>3. 服務內容</h2>
                    <p>3.1 本公司將根據自身的業務範圍和能力，向會員提供相應的服務，並保證按照相關法律法規和協議約定執行。</p>
                    <p>3.2 本公司有權根據業務發展和市場需求調整、變更或終止提供的服務，但應提前通知會員並盡力減少影響。</p>
                
                    <h2 style='font-weight: bold; font-size: 20px;'>4. 個人資訊保護</h2>
                    <p>4.1 本公司將嚴格保護會員的個人資訊安全，並依據相關法律法規和隱私政策處理會員的個人資訊。</p>
                    <p>4.2 會員應自行保管個人資訊，不得將帳號和密碼等個人資訊透露給他人，否則因此造成的損失將由會員自行承擔。</p>
                
                    <h2 style='font-weight: bold; font-size: 20px;'>5. 協議修改與解釋</h2>
                    <p>5.1 本公司有權根據業務發展和市場變化修改本協議，並通過合適的方式通知會員，修改後的協議自公告之日起生效。</p>
                </body>
            </html>
      `,
      },
      {
        title: '隱私權政策',
        html: `<!DOCTYPE html>
            <html lang="zh-TW">
            
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>隱私權政策</title>
            </head>
            
            <body>
            
                <h1 style="font-weight: bold; font-size: 24px;">隱私權政策</h1>
            
                <p>本隱私權政策（以下簡稱“本政策”）適用於 [您的公司/組織名稱]（以下簡稱“我們”或“本公司”）運營的網站、應用程序和服務（以下統稱為“服務”）。我們尊重用戶（以下簡稱“您”或“用戶”）的隱私權，承諾保護用戶的個人資訊安全和隱私。本政策將告知您我們收集、使用、存儲和保護您的個人資訊的方式。</p>
            
                <h2 style="font-weight: bold; font-size: 20px;">1. 收集的資訊</h2>
            
                <p>1.1 我們可能收集的個人資訊包括但不限於：姓名、電子郵件地址、聯繫方式、居住地址、IP 地址、設備資訊、瀏覽記錄。</p>
            
                <h2 style="font-weight: bold; font-size: 20px;">2. 資訊使用</h2>
            
                <p>2.1 我們收集的個人資訊將用於提供、維護、保護和改善我們的服務，並且用於開發新的服務。</p>
            
                <h2 style="font-weight: bold; font-size: 20px;">3. 資訊分享</h2>
            
                <p>3.1 我們不會將您的個人資訊出售、交易或以其他方式轉讓給第三方，除非事先獲得您的同意。</p>
            
                <h2 style="font-weight: bold; font-size: 20px;">4. 資訊保護</h2>
            
                <p>4.1 我們將採取合理的安全措施保護您的個人資訊免於丟失、滅失、被濫用或未經授權的訪問、披露、更改或破壞。</p>
            
                <h2 style="font-weight: bold; font-size: 20px;">5. Cookie 技術</h2>
            
                <p>5.1 我們可能使用 Cookie 和類似技術來提高我們的服務質量，您可以根據自己的偏好管理 Cookie。</p>
            
                <h2 style="font-weight: bold; font-size: 20px;">6. 法律遵守</h2>
            
                <p>6.1 我們將遵守適用的法律法規，對您的個人資訊進行保護和處理。</p>
            
                <p>本政策自 [政策生效日期] 起生效。</p>
            
            </body>
            
            </html>
        `,
      },
    ]);
  }),
];

export default handlers;
