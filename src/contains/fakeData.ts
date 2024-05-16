import avatar1 from "@/images/avatars/Image-1.png";
import avatar2 from "@/images/avatars/Image-2.png";
import avatar3 from "@/images/avatars/Image-3.png";
import avatar4 from "@/images/avatars/Image-4.png";
import avatar5 from "@/images/avatars/Image-5.png";
import avatar6 from "@/images/avatars/Image-6.png";
import avatar7 from "@/images/avatars/Image-7.png";
import avatar8 from "@/images/avatars/Image-8.png";
import avatar9 from "@/images/avatars/Image-9.png";
import avatar10 from "@/images/avatars/Image-10.png";
//
import product1 from "@/images/products/1.png";
import product2 from "@/images/products/2.png";
import product3 from "@/images/products/3.png";
import product4 from "@/images/products/4.png";
import product5 from "@/images/products/5.png";
import product6 from "@/images/products/6.png";
import product7 from "@/images/products/7.png";
import product8 from "@/images/products/8.png";
import product9 from "@/images/products/9.png";
import product10 from "@/images/products/10.png";
import product11 from "@/images/products/11.png";
import product12 from "@/images/products/12.png";
import product13 from "@/images/products/13.png";
import product14 from "@/images/products/14.png";
import product15 from "@/images/products/15.png";
import product16 from "@/images/products/16.png";
import product17 from "@/images/products/17.png";
import product18 from "@/images/products/18.png";
import product19 from "@/images/products/19.png";
import product20 from "@/images/products/20.png";
import product21 from "@/images/products/21.png";
import product22 from "@/images/products/22.png";
import product23 from "@/images/products/23.png";
import product24 from "@/images/products/24.png";
//
export const productImgs = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
  product14,
  product15,
  product16,
  product17,
  product18,
  product19,
  product20,
  product21,
  product22,
  product23,
  product24,
];

export const nftsAbstracts = [
  "https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  "https://imgb.ifunny.co/images/4b42b6078ecf02e24c08d99f3b118773e48c7dc80cfd60c5f9570c9f686e108f_1.jpg",
];

export const avatarImgs = [
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
];

export const personNames = [
  "Kailey Greer",
  "Karli Costa",
  "Camren Banes",
  "Belinda Rer",
  "Jameson Dick",
  "Giada Mann",
  "Evie Osborn",
  "Juliet Macp",
  "Charlize Ray",
  "Amaris Pitt",
  "Arnav Moris",
  "Malakai Cey",
  "Nevaeh Henry",
  "Mireya Roman",
  "Anthony Wyat",
  "Mike Orr",
  "Azul Hull",
  "Derick Hub",
];

export const tagNames = [
  "Life",
  "Travel",
  "Music",
  "Beauty",
  "Beach",
  "Hotdog",
  "Car",
  "Bike",
  "Wordpress",
  "Php",
  "Javascript",
  "Vue",
  "Reactjs",
  "Androind",
];

export const featuredImgs = [
  "https://images.pexels.com/photos/10343244/pexels-photo-10343244.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/5843990/pexels-photo-5843990.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/10343245/pexels-photo-10343245.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/3579484/pexels-photo-3579484.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  "https://images.pexels.com/photos/7655908/pexels-photo-7655908.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/13270364/pexels-photo-13270364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  "https://images.pexels.com/photos/12699167/pexels-photo-12699167.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
];

const aTitles = [
  "Seção que te atualiza sobre os sentimentos do Gabriel pela Thay",
];

function _getTitleRd() {
  return aTitles[Math.floor(Math.random() * aTitles.length)];
}
function _getPersonNameRd() {
  return personNames[Math.floor(Math.random() * personNames.length)];
}

function _getImgRd() {
  return featuredImgs[Math.floor(Math.random() * featuredImgs.length)];
}
function _getTagNameRd() {
  return tagNames[Math.floor(Math.random() * tagNames.length)];
}
function _getAvatarRd() {
  return avatarImgs[Math.floor(Math.random() * avatarImgs.length)];
}

export {
  _getImgRd,
  _getTagNameRd,
  _getAvatarRd,
  _getTitleRd,
  _getPersonNameRd,
};
