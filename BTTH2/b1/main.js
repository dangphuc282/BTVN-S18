let products = [
  { id: 1, name: 'Milk', count: 100 },
  { id: 2, name: 'Orange', count: 100 },
  { id: 3, name: 'Butter', count: 100 },
];

products.push({ 
  id: 4, 
  name: 'Cheese', 
  count: 50 
});


products = products.filter(product => product.id !== 2);


const product3 = products.find(product => product.id === 3);
if (product3) {
  product3.count = 0;
}

const keyword = 'Butter';
const found = products.find(product => product.name === keyword);

if (found) {
  console.log("Thong tin san pham:", found);
} else {
  console.log("Khong co du lieu tim kiem");
}

console.log("Danh sach san pham hin tai:", products);
