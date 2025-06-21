// 페이지 로드 시 실행
document.addEventListener("DOMContentLoaded", function () {
  const messageInput = document.getElementById("messageInput");
  const sendButton = document.getElementById("sendButton");
  const chatMessages = document.getElementById("chatMessages");

  // 모델 선택 관련 요소들
  const modelSelectorButton = document.getElementById("modelSelectorButton");
  const modelDropdown = document.getElementById("modelDropdown");
  const currentModelSpan = document.getElementById("currentModel");
  const modelOptions = document.querySelectorAll(".model-option");

  // 현재 선택된 모델
  let selectedModel = "chatgpt";

  // 초기 타이핑 텍스트
  const initialMessage = "조재흥님이 어떤 분인지 궁금해요.";

  const aiResponse = `조재흥님이 어떤 분인지 궁금하시군요! 제가 분석한 데이터를 바탕으로 설명해 드릴게요. 조재흥님은 **사업을 곁들인 iOS 개발자**이자, 한마디로 **개발 덕후**라고 할 수 있겠습니다.

AI가 발전하는 시대일수록 더욱 중요해지는 CS(컴퓨터 구조, 운영체제, 자료구조, 네트워크, 데이터베이스) 지식을 탄탄하게 갖추고 있습니다. 개발 자체를 사랑하기에, 더 잘하고 싶은 마음으로 끊임없이 공부하며 역량을 키워왔습니다.

물론 이론에만 빠삭한 것은 아닙니다. 다음과 같이 풍부한 경험을 통해 아이디어를 현실로 만들어냈습니다.

- iOS 앱을 직접 만들어 앱스토어에 배포하기도 했습니다. [@자세히 보기](https://github.com/hngfu/todo-check)
<img src="https://user-images.githubusercontent.com/38850628/68876123-4fbbc680-0747-11ea-8164-65d4cdc8fd83.gif" width="400" style="max-width:100%;" alt="Todo-Check 앱 데모"/>
- 관심 있는 기술이 생기면 학습하여 직접 구현해 봅니다. [@자세히 보기](https://github.com/hngfu/checkplusplus) [@영상 보기](https://www.youtube.com/watch?v=cr2EiR9jQEs)
<img src="images/CheckPlusPlus.gif" width="600" style="max-width:100%;" alt="CheckPlusPlus 프로젝트 소개"/>
- 코로나 시기에는 정부의 공공 마스크 API가 공개되자마자 빠르게 마스크 검색 앱을 개발했습니다. [@자세히 보기](https://github.com/hngfu/mask-app)<br>(아쉽게도 정부 공식 계정이 아니라는 이유로 앱 심사가 거절되어 아쉬워했다는 기록이 있네요.)
<img src="https://user-images.githubusercontent.com/38850628/110279785-09196c00-801d-11eb-8d5b-0d2e7e235e57.gif" width="400" style="max-width:100%;" alt="마스크 검색 앱 데모">
- iOS 개발에만 머무르지 않고, 개발 영역을 확장하여 원하는 사이트로 빠르게 이동할 수 있는 크롬 익스텐션을 개발하고 출시했습니다. [@구경가기](https://chrome.google.com/webstore/detail/hngfuisswift/mkklklabflcildhpimhojcclkndjcpja?hl=ko)
<img src="https://user-images.githubusercontent.com/38850628/61694529-9c306000-ad6c-11e9-80f3-210eee6377e0.jpg" width="400" style="max-width:100%;" alt="크롬 익스텐션 스토어 이미지">
또한, 동료와 함께 성장하는 가치를 중요하게 생각하며 자신의 지식을 적극적으로 공유합니다.
- 코드스쿼드 온라인 컨퍼런스에서 수백 명의 청중 앞에서 발표를 진행했습니다. [@발표 영상 보기](https://youtu.be/Ghbcw9KKvKw)
<img src="images/AGFT.gif" width="600" style="max-width:100%;" alt="컨퍼런스 발표 이미지"/>
- 그 외에도 오토 레이아웃 활용법, 추상화, 단위 테스트, 코드 개선 등 다양한 주제로 발표를 진행했습니다.
  - 오토 레이아웃 활용법 [@Code 보기](https://github.com/hngfu/presentation/tree/master/asset/FirstLayout)
  - 추상화, 일반화, 함수, 타입 [@추일함타.pdf 보기](https://github.com/hngfu/presentation/blob/master/asset/%ED%9D%A5%ED%91%B8%EC%9D%98%20%EC%B6%94%EC%9D%BC%ED%95%A8%ED%83%80%20ver.2.pdf)
  - 단위 테스트 [@Hngfu's UnitTest.pdf 보기](https://github.com/hngfu/presentation/blob/master/asset/Hngfu's%20UnitTest.pdf)
  - 점점 개선되는 코드 [@코드 파티.pdf 보기](https://github.com/hngfu/presentation/blob/master/asset/%EC%BD%94%EB%93%9C%ED%8C%8C%ED%8B%B0%202019-01-08.pdf)

이러한 경험을 바탕으로, 다음과 같은 회사에서 iOS 개발자로서 핵심적인 역할을 수행했습니다.

[🔗 **카사코리아 (Kasa Korea)**](https://www.kasa.co.kr/)
- 차트, 배당금 등 건물 상장부터 매각까지의 주요 기능 개발
- CS 지식을 바탕으로 메모리 누수(Memory Leak) 등 다양한 문제 개선
- 불필요한 API 요청 제거를 통한 성능 향상
- 반복 코드를 줄이는 추상화된 프로토콜을 설계하여 생산성 및 가독성 증대
- 시큐어 코딩을 통한 보안 강화

[🔗 **블루프린트랩 (Blueprint Lab)**](https://www.blueprint-lab.com/)
- 사내 모든 iOS 앱(McLaren, MASQ 등)의 개발 및 유지보수 총괄
- 앱 자동 배포 셸 스크립트 제작으로 생산성 향상
- 핵심 기능 라이브러리화를 통해 관리 포인트 감소 및 생산성 향상
- Human Interface Guidelines(HIG) 기반의 UI/UX 개선

최근에는 개인 사업가로서의 역량을 펼치고 있습니다. 카사코리아 퇴사 후, 중국인 타겟의 한국 뷰티 서비스 '찐' 리뷰 플랫폼 **K-Expert**를 직접 만들었습니다. 기획, 디자인, 개발, 운용까지 **A to Z를 혼자 진행**하며 풀스택 역량을 증명했습니다. [@자세히 보기](https://github.com/hngfu/resume/blob/master/PREMLINK/K-Expert.md) [@영상 보기](https://youtu.be/Bm9cZo092_E)
<img src="images/K-Expert.gif" width="400" style="max-width:100%;" alt="K-Expert 서비스">
결론적으로 조재흥님은 **탄탄한 기본기와 경계를 넘나드는 다양한 경험**을 바탕으로 어떤 일이든 생산성 있게 '잘' 해낼 수 있는 개발자입니다. **최고, 최적의 선택**이 될 것이라 판단됩니다.
---
더 다양하고 많은 정보는 아래 링크에서 확인하실 수 있습니다.
- [**🔗 조재흥님의 이력서 전체 보기 (GitHub)**](https://github.com/hngfu/resume)
- AI 활용 Udemy 자막 번역 크롬 익스텐션 [@영상 보기](https://youtu.be/TcOTNnsyLz0?si=IRKopoXcVb0xYUKE)`;

  // 페이지 로드 후 타이핑 시작
  setTimeout(() => {
    startTyping();
  }, 1000);

  // 타이핑 효과 함수
  function startTyping() {
    let index = 0;
    messageInput.value = "";

    function typeCharacter() {
      if (index < initialMessage.length) {
        messageInput.value += initialMessage[index];
        index++;
        setTimeout(typeCharacter, 100); // 타이핑 속도
      } else {
        // 타이핑 완료 후 전송 버튼 활성화
        sendButton.disabled = false;
        messageInput.style.cursor = "not-allowed"; // 수정 불가 표시
      }
    }

    typeCharacter();
  }

  // 전송 버튼 클릭 이벤트
  sendButton.addEventListener("click", function () {
    if (!sendButton.disabled && messageInput.value.trim()) {
      sendMessage();
    }
  });

  // 엔터 키 이벤트
  messageInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!sendButton.disabled && messageInput.value.trim()) {
        sendMessage();
      }
    }
  });

  // 메시지 전송 함수
  function sendMessage() {
    const message = messageInput.value.trim();
    if (!message) return;

    // 프롬프트 숨기기
    const inputPrompt = document.querySelector(".input-prompt");
    if (inputPrompt) {
      inputPrompt.style.display = "none";
    }

    // 채팅 컨테이너 레이아웃 변경
    const chatContainer = document.querySelector(".chat-container");
    const container = document.querySelector(".container");
    chatContainer.classList.add("active");
    container.classList.add("active");

    // 사용자 메시지 추가
    addUserMessage(message);

    // 입력창 비우기 및 버튼 비활성화
    messageInput.value = "";
    sendButton.disabled = true;
    messageInput.disabled = true;

    // AI 응답 시뮬레이션 (약간의 지연 후)
    setTimeout(() => {
      addAIMessage(aiResponse);
    }, 1000);
  }

  // 사용자 메시지 추가
  function addUserMessage(message) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message user";
    messageDiv.innerHTML = `
            <div class="message-content">${message}</div>
            <div class="avatar user">조</div>
        `;
    chatMessages.appendChild(messageDiv);
    scrollToBottom();
  }

  // AI 메시지 추가 (타이핑 효과)
  function addAIMessage(message) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "message assistant";
    messageDiv.innerHTML = `
            <div class="avatar assistant">AI</div>
            <div class="message-content"></div>
        `;
    chatMessages.appendChild(messageDiv);

    const contentDiv = messageDiv.querySelector(".message-content");

    // 메시지를 미리 포맷팅하여 HTML 형태로 변환
    const formattedMessage = formatMessage(message);

    // HTML을 타이핑 가능한 세그먼트로 파싱
    const segments = parseHTMLToSegments(formattedMessage);
    let currentSegmentIndex = 0;
    let currentCharIndex = 0;

    function typeAIResponse() {
      if (currentSegmentIndex < segments.length) {
        const segment = segments[currentSegmentIndex];

        if (segment.type === "instant") {
          // 이미지나 완전한 태그는 즉시 표시
          currentSegmentIndex++;
          currentCharIndex = 0;
        } else {
          // 텍스트는 한 글자씩
          if (currentCharIndex < segment.content.length) {
            currentCharIndex++;
          } else {
            currentSegmentIndex++;
            currentCharIndex = 0;
          }
        }

        // 현재까지의 내용을 생성
        let displayedContent = "";
        for (let i = 0; i <= currentSegmentIndex && i < segments.length; i++) {
          const seg = segments[i];
          if (i < currentSegmentIndex) {
            // 완료된 세그먼트
            displayedContent += seg.content;
          } else if (i === currentSegmentIndex) {
            // 현재 타이핑 중인 세그먼트
            if (seg.type === "instant") {
              displayedContent += seg.content;
            } else {
              displayedContent += seg.content.substring(0, currentCharIndex);
            }
          }
        }

        contentDiv.innerHTML =
          displayedContent + '<span class="typing-cursor"></span>';
        scrollToBottom();

        // 타이핑 속도 조절
        let delay = 10; // 기본 속도

        if (currentSegmentIndex < segments.length) {
          const currentSegment = segments[currentSegmentIndex];

          if (currentSegment.type === "instant") {
            delay = 0; // 즉시 표시
          } else if (currentCharIndex > 0) {
            const lastChar = currentSegment.content[currentCharIndex - 1];
            if (lastChar === "." || lastChar === "!" || lastChar === "?") {
              delay = 200;
            } else if (
              lastChar === "," ||
              lastChar === ":" ||
              lastChar === ";"
            ) {
              delay = 100;
            }
          }
        }

        setTimeout(typeAIResponse, delay);
      } else {
        // 타이핑 완료 - 커서 제거
        contentDiv.innerHTML = formattedMessage;
        scrollToBottom();
      }
    }

    scrollToBottom();
    setTimeout(typeAIResponse, 500);
  }

  // HTML을 타이핑 세그먼트로 파싱하는 함수
  function parseHTMLToSegments(html) {
    const segments = [];
    let i = 0;

    while (i < html.length) {
      if (html[i] === "<") {
        const tagStart = i;
        let tagEnd = html.indexOf(">", i);

        if (tagEnd !== -1) {
          const tagContent = html.substring(tagStart, tagEnd + 1);

          // 이미지 태그는 즉시 표시
          if (tagContent.startsWith("<img")) {
            segments.push({
              type: "instant",
              content: tagContent,
            });
            i = tagEnd + 1;
          }
          // HR 구분선 태그는 즉시 표시
          else if (tagContent.startsWith("<hr")) {
            segments.push({
              type: "instant",
              content: tagContent,
            });
            i = tagEnd + 1;
          }
          // 링크 태그 처리
          else if (tagContent.startsWith("<a ")) {
            // 링크 태그 시작 - 링크 전체를 찾기
            const linkStart = tagStart;
            const closingTagIndex = html.indexOf("</a>", tagEnd);

            if (closingTagIndex !== -1) {
              const fullLink = html.substring(linkStart, closingTagIndex + 4);
              const linkInnerHTML = html.substring(tagEnd + 1, closingTagIndex);

              // 링크 내부에 HTML 태그가 있는지 확인
              if (linkInnerHTML.includes("<")) {
                // HTML 태그가 포함된 복잡한 링크는 세분화해서 처리
                // 링크 여는 태그를 즉시 표시
                segments.push({
                  type: "instant",
                  content: html.substring(linkStart, tagEnd + 1),
                });

                // 링크 내부 HTML을 재귀적으로 파싱
                const innerSegments = parseHTMLToSegments(linkInnerHTML);
                segments.push(...innerSegments);

                // 링크 닫는 태그를 즉시 표시
                segments.push({
                  type: "instant",
                  content: "</a>",
                });

                i = closingTagIndex + 4;
              } else if (linkInnerHTML.trim()) {
                // 단순한 텍스트만 있는 링크
                // 링크 여는 태그를 즉시 표시
                segments.push({
                  type: "instant",
                  content: html.substring(linkStart, tagEnd + 1),
                });

                // 링크 텍스트를 타이핑
                segments.push({
                  type: "text",
                  content: linkInnerHTML,
                });

                // 링크 닫는 태그를 즉시 표시
                segments.push({
                  type: "instant",
                  content: "</a>",
                });

                i = closingTagIndex + 4;
              } else {
                // 텍스트가 없는 링크는 전체를 즉시 표시
                segments.push({
                  type: "instant",
                  content: fullLink,
                });
                i = closingTagIndex + 4;
              }
            } else {
              // 닫는 태그를 찾을 수 없으면 여는 태그만 즉시 표시
              segments.push({
                type: "instant",
                content: tagContent,
              });
              i = tagEnd + 1;
            }
          }
          // 기타 HTML 태그들은 즉시 표시
          else {
            segments.push({
              type: "instant",
              content: tagContent,
            });
            i = tagEnd + 1;
          }
        } else {
          // '>'를 찾을 수 없으면 '<' 문자를 텍스트로 처리
          const textStart = i;
          let textEnd = i + 1;

          // 다음 태그나 문자열 끝까지 찾기
          while (textEnd < html.length && html[textEnd] !== "<") {
            textEnd++;
          }

          if (textEnd > textStart) {
            segments.push({
              type: "text",
              content: html.substring(textStart, textEnd),
            });
          }

          i = textEnd;
        }
      } else {
        // 일반 텍스트 처리
        const textStart = i;
        let textEnd = i;

        // 다음 태그까지 또는 문자열 끝까지
        while (textEnd < html.length && html[textEnd] !== "<") {
          textEnd++;
        }

        if (textEnd > textStart) {
          segments.push({
            type: "text",
            content: html.substring(textStart, textEnd),
          });
        }

        i = textEnd;
      }
    }

    return segments;
  }

  // 메시지를 세그먼트로 파싱하는 함수
  function parseMessageSegments(text) {
    // 먼저 전체 텍스트를 포맷팅
    const formattedText = formatMessage(text);

    // 포맷된 텍스트를 문자 단위로 분할
    const segments = [];
    const chars = Array.from(formattedText);

    for (let i = 0; i < chars.length; i++) {
      segments.push({
        type: "char",
        raw: chars[i],
        formatted: chars[i],
        displayText: chars[i],
      });
    }

    return segments;
  }

  // 메시지 포맷팅 (마크다운 스타일 적용)
  function formatMessage(text) {
    // 먼저 체크리스트 처리
    text = text.replace(
      /(?:^|\n)((?:- \[[ x]\] .+(?:\n|$))+)/gm,
      (match, listContent) => {
        const items = listContent
          .trim()
          .split("\n")
          .map((line) => {
            const checked = line.includes("[x]");
            const text = line.replace(/^- \[[ x]\] /, "").trim();
            return { text, checked };
          })
          .filter((item) => item.text.length > 0);
        return `<ul class="checklist">${items
          .map(
            (item) =>
              `<li${item.checked ? ' class="checked"' : ""}>${item.text}</li>`
          )
          .join("")}</ul>`;
      }
    );

    // 중첩 리스트 처리 (들여쓰기 포함)
    text = text.replace(
      /(?:^|\n)((?:[ ]*- .+(?:\n|$))+)/gm,
      (match, listContent) => {
        const lines = listContent.trim().split("\n");
        let html = "";
        let stack = [];

        lines.forEach((line) => {
          const indentMatch = line.match(/^( *)- (.+)$/);
          if (indentMatch) {
            const [, indent, content] = indentMatch;
            const level = Math.floor(indent.length / 2);

            // 스택 조정
            while (stack.length > level) {
              html += "</ul>";
              stack.pop();
            }

            // 새 레벨 시작
            if (stack.length === level) {
              html += "<ul>";
              stack.push(level);
            }

            html += `<li>${content}</li>`;
          }
        });

        // 남은 태그 닫기
        while (stack.length > 0) {
          html += "</ul>";
          stack.pop();
        }

        return html;
      }
    );

    // 숫자 리스트 처리 (들여쓰기 포함)
    text = text.replace(
      /(?:^|\n)((?:[ ]*\d+\. .+(?:\n|$))+)/gm,
      (match, listContent) => {
        const lines = listContent.trim().split("\n");
        let html = "";
        let stack = [];

        lines.forEach((line) => {
          const indentMatch = line.match(/^( *)(\d+)\. (.+)$/);
          if (indentMatch) {
            const [, indent, number, content] = indentMatch;
            const level = Math.floor(indent.length / 2);

            // 스택 조정
            while (stack.length > level) {
              html += "</ol>";
              stack.pop();
            }

            // 새 레벨 시작
            if (stack.length === level) {
              html += "<ol>";
              stack.push(level);
            }

            html += `<li>${content}</li>`;
          }
        });

        // 남은 태그 닫기
        while (stack.length > 0) {
          html += "</ol>";
          stack.pop();
        }

        return html;
      }
    );

    return text
      .replace(
        /## (.*)/g,
        '<h3 style="font-size: 18px; font-weight: 600; margin: 16px 0 8px 0; color: #19c37d;">$1</h3>'
      )
      .replace(
        /^---$/gm,
        '<hr style="border: none; height: 1px; background-color:rgba(255, 255, 255, 0.05); margin: 40px 0 22.5px 0;">'
      )
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, function (match, linkText, url) {
        // 링크 텍스트 내부의 마크다운 처리
        const processedText = linkText.replace(
          /\*\*(.*?)\*\*/g,
          '<strong style="color: #19c37d;">$1</strong>'
        );
        return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="color: #19c37d; text-decoration: none; transition: text-decoration 0.2s ease;" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'">${processedText}</a>`;
      })
      .replace(/\*\*(.*?)\*\*/g, '<strong style="color: #19c37d;">$1</strong>')
      .replace(/\n\n/g, "<br><br>")
      .replace(/\n/g, "<br>");
  }

  // 스크롤을 맨 아래로 (비활성화됨 - 자유 스크롤 허용)
  function scrollToBottom() {
    // chatMessages.scrollTop = chatMessages.scrollHeight; // 자동 스크롤 비활성화
  }

  // 새 채팅 버튼 이벤트 (요소가 존재할 때만)
  const newChatBtn = document.querySelector(".new-chat-btn");
  if (newChatBtn) {
    newChatBtn.addEventListener("click", function () {
      location.reload();
    });
  }

  // 모델 선택 드롭다운 토글
  function toggleModelDropdown() {
    const isOpen = modelDropdown.classList.contains("show");

    if (isOpen) {
      modelDropdown.classList.remove("show");
      modelSelectorButton.classList.remove("active");
    } else {
      modelDropdown.classList.add("show");
      modelSelectorButton.classList.add("active");
    }
  }

  // 모델 선택
  function selectModel(modelId) {
    selectedModel = modelId;

    // 모든 옵션에서 selected 클래스 제거
    modelOptions.forEach((option) => {
      option.classList.remove("selected");
      const badge = option.querySelector(".model-badge");
      if (badge) badge.style.display = "none";
    });

    // 선택된 옵션에 selected 클래스 추가
    const selectedOption = document.querySelector(`[data-model="${modelId}"]`);
    if (selectedOption) {
      selectedOption.classList.add("selected");
      const badge = selectedOption.querySelector(".model-badge");
      if (badge) badge.style.display = "block";

      // 버튼 텍스트 업데이트
      const title = selectedOption.querySelector(".model-title").textContent;
      currentModelSpan.textContent = title;

      // ChatJJH Plus 선택 시 Confetti 효과
      if (modelId === "chatgpt-plus") {
        triggerConfettiEffect();
      }
    }

    // 드롭다운 닫기
    modelDropdown.classList.remove("show");
    modelSelectorButton.classList.remove("active");
  }

  // Confetti 효과 함수
  function triggerConfettiEffect() {
    // 여러 차례 폭죽 효과
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    // 다양한 색상과 각도로 폭죽 발사
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ["#19c37d", "#00d4aa", "#00bfa5", "#4caf50", "#8bc34a"],
    });

    fire(0.2, {
      spread: 60,
      colors: ["#ffd700", "#ffeb3b", "#ff9800", "#ff5722", "#e91e63"],
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ["#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ["#ff4081", "#f50057", "#c51162", "#ad1457", "#880e4f"],
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ["#00e676", "#00c853", "#64dd17", "#76ff03", "#b2ff59"],
    });

    // 추가 폭죽 효과 (약간의 지연)
    setTimeout(() => {
      fire(0.15, {
        spread: 80,
        origin: { x: 0.2, y: 0.6 },
        colors: ["#19c37d", "#00d4aa", "#4caf50"],
      });

      fire(0.15, {
        spread: 80,
        origin: { x: 0.8, y: 0.6 },
        colors: ["#ffd700", "#ff9800", "#ff5722"],
      });
    }, 200);

    // 마지막 폭죽 (중앙에서)
    setTimeout(() => {
      fire(0.3, {
        spread: 360,
        startVelocity: 30,
        decay: 0.9,
        scalar: 0.8,
        origin: { x: 0.5, y: 0.3 },
        colors: ["#19c37d", "#ffd700", "#9c27b0", "#2196f3", "#ff4081"],
      });
    }, 400);
  }

  // 외부 클릭 시 드롭다운 닫기
  function closeDropdownOnOutsideClick(event) {
    if (
      !modelSelectorButton.contains(event.target) &&
      !modelDropdown.contains(event.target)
    ) {
      modelDropdown.classList.remove("show");
      modelSelectorButton.classList.remove("active");
    }
  }

  // 이벤트 리스너 추가
  if (modelSelectorButton && modelDropdown) {
    modelSelectorButton.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      toggleModelDropdown();
    });

    modelOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        e.stopPropagation();
        const modelId = option.getAttribute("data-model");
        selectModel(modelId);
      });
    });

    document.addEventListener("click", closeDropdownOnOutsideClick);

    // 초기 선택된 모델 설정
    selectModel("chatgpt");
  }
});
