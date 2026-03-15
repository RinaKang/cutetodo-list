const addBtn = document.getElementById('addBtn');
const todoInput = document.getElementById('todoInput');
const myElement = document.getElementById('myElement');

addBtn.addEventListener('click', function() {
    const value = todoInput.value.trim();
    if (value) {
        const li = document.createElement('li');
        li.className = 'todo-item';

        // 체크박스 + 텍스트 묶음
        const leftDiv = document.createElement('div');
        leftDiv.style.display = "flex";
        leftDiv.style.alignItems = "center";
        leftDiv.style.gap = "10px";

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'todo-checkbox';

        // span으로 감싸기
        const span = document.createElement('span');
        span.textContent = value;
        leftDiv.appendChild(checkbox);
        leftDiv.appendChild(span);  

        // 삭제 버튼 생성
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '삭제';
        deleteBtn.className = 'delete-button';  

        // li에 체크박스와 텍스트, 삭제버튼 추가
        li.appendChild(leftDiv);
        li.appendChild(deleteBtn);

        myElement.appendChild(li);
        todoInput.value = '';

        // 체크박스 클릭 시 텍스트에 취소선 효과
        checkbox.addEventListener('change', function() {
            if (checkbox.checked) {
                span.style.textDecoration = 'line-through';  // textSpan → span
            } else {
                span.style.textDecoration = 'none';           // textSpan → span
            }
        });

        // 삭제 버튼 클릭 시 해당 항목 삭제
        deleteBtn.addEventListener('click', function() {
            myElement.removeChild(li);
        });
    }
});

// 엔터키로도 추가 가능하게
todoInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        addBtn.click();
    }
});
