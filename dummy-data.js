import Category from '../models/category';
import Food from '../models/Food';

export const CATEGORIES = [
  new Category('c1', 'Gergin ', 'pink'),
  new Category('c2', 'Öfkeli', 'darkpink'),
  new Category('c3', 'Korkmuş', 'brown'),
  new Category('c4', 'Sevinçli', 'yellow'),
  new Category('c5', 'Heyecanlı', 'blue'),
  new Category('c6', 'Mutlu', 'green'),
  new Category('c7', 'Endişeli', 'lightblue'),
  new Category('c8', 'Üzgün', 'lightgreen'),
];

export const FOODS = [
  new Food(
    'm1',
    ['c1', 'c2','c3','c4','c5','c6','c7','c8'],
    'Uzman Psikolog',
    'https://avicennaint.com/wp-content/uploads/2023/08/uzman-psikolog-nasil-olunur-b.webp',
  
  ),
  new Food(
    'm2',
    ['c1', 'c2','c3','c4','c5','c6','c7','c8'],
    'Nefes Egzersizleri',
    'https://mertburo.com/images/posts/sakinlestirici-nefes-egzersizi.jpg',
  ),
  
  new Food(
    'm3',
    ['c1', 'c2','c3','c4','c5','c6','c7','c8'],
    'Meditasyon Uygulamaları',
    'https://blog.longosphere.com/wp-content/uploads/2023/09/meditasyon-nedir-dogada-meditasyon-onerileri.jpg',
  
  ),
  new Food(
    'm4',
    ['c1', 'c2'],
    'Sportif Aktiviteler',
    'https://media-cdn.t24.com.tr/media/library/2019/08/1567011859955-untitled-1.jpg',
  ),
]