const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// دیتای نمونه محصولات
let products = [
  { id: 1, title: 'محصول اول', description: 'توضیح اول', price: 100 },
  { id: 2, title: 'محصول دوم', description: 'توضیح دوم', price: 200 },
];



// حذف یک محصول
app.delete('/products/:id', (req, res) => {
  const id = Number(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ message: 'محصول حذف شد' });
});



// ایجاد محصول جدید
app.post('/products', (req, res) => {
  const { title, description, price, image } = req.body;
  const newProduct = {
    id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
    title,
    description,
    price,
    image: image || 'https://via.placeholder.com/150',
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// گرفتن همه محصولات
app.get('/products', (req, res) => {
  res.json(products);
});

// گرفتن یک محصول خاص
app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === +req.params.id);
  product ? res.json(product) : res.status(404).send('محصول پیدا نشد');
});

// ویرایش محصول
app.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const index = products.findIndex(p => p.id === id);

  if (index !== -1) {
    products[index] = { ...products[index], ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).send('محصول پیدا نشد');
  }
});

app.get('/', (req, res) => {
  res.send('سرور Node.js اجرا شده و آماده است ✅');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
