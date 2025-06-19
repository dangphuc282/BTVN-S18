const input = document.getElementById('inputText');
const keyboard = document.getElementById('keyboard');

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

// Tạo các phím chữ
letters.forEach(char => {
  const btn = document.createElement('button');
  btn.textContent = char;
  btn.classList.add('key');
  btn.onclick = () => {
    input.value += char;
  };
  keyboard.appendChild(btn);
});

// Nút Xóa
const delBtn = document.createElement('button');
delBtn.textContent = 'Xóa';
delBtn.classList.add('key', 'delete');
delBtn.onclick = () => {
  input.value = input.value.slice(0, -1);
};
keyboard.appendChild(delBtn);
