const openMenuBtn = document.querySelector('.open-menu-svg');
const mdHeaderNav = document.querySelector('.small-header-nav');
const mdHeaderNavLinks = document.querySelectorAll('.md-header-nav-li');

const PopUpCardContainer = document.querySelector('.popup-card-container');

const popUpCardImage = document.querySelector('.popup-card-image');
const popUpCardCloseBtn = document.querySelector('.popup-card-close-btn');

popUpCardImage.setAttribute('src', 'images/tonic.png');

const openMenuBtnFunc = () => {
  mdHeaderNav.classList.add('d-flex');
  openMenuBtn.classList.add('d-none');
};

const closeMenuBtnFunc = () => {
  mdHeaderNav.classList.remove('d-flex');
  openMenuBtn.classList.remove('d-none');
};

mdHeaderNavLinks.forEach((mobileMenuLinks) => {
  mobileMenuLinks.addEventListener('click', function () {
    mdHeaderNav.classList.remove('d-flex');
    openMenuBtn.classList.remove('d-none');
  });
});

const openMenu = document.querySelector('.open-menu-svg');
openMenu.addEventListener('click', openMenuBtnFunc);

const closeMenu = document.querySelector('.close-menu-svg');
closeMenu.addEventListener('click', closeMenuBtnFunc);

popUpCardCloseBtn.addEventListener('click', function () {
  PopUpCardContainer.classList.add('d-none');
  PopUpCardContainer.classList.remove('d-flex');
});

const imageAttributesArray = [
  {
    src: 'images/tonic.png',
    title: 'Image 0',
    alt: 'Image 0 Alt Text',
    class: 'tonic-popup',
    tagLi: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
  {
    src: 'images/tonic2.png',
    title: 'Image 1',
    alt: 'Image 1 Alt Text',
    class: 'tonic-two-popup',
    tagLi: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
  {
    src: 'images/multipost.png',
    title: 'Image 2',
    alt: 'Image 2 Alt Text',
    class: 'multipost-popup',
    tagLi: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
  {
    src: 'images/multipost2.png',
    title: 'Image 3',
    alt: 'Image 3 Alt Text',
    class: 'multipost-two-popup',
    tagLi: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
  {
    src: 'images/facebook.png',
    title: 'Image 4',
    alt: 'Image 4 Alt Text',
    class: 'facebook-popup',
    tagLi: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
  {
    src: 'images/nature.png',
    title: 'Image 5',
    alt: 'Image 5 Alt Text',
    class: 'nature-popup',
    tagLi: ['Ruby on rails', 'css', 'JavaScript', 'html'],
  },
];

const cardUl = document.querySelector('.md-multipost-card-flex');

const generateProjectCard = (imgSrc, imgTitle, imgAlt, popupClass, tags) => `
  <li class="cards">
  <figure>
    <img
      class="card-images"
      src="${imgSrc}"
      title="${imgTitle}"
      alt="${imgAlt}"
    />
    <figcaption class="card-text">Multi-Post Stories Gain+Glory</figcaption>
  </figure>
  
   <ul class="card-projects">
   ${tags.map((tag) => `<li>${tag}</li>`)}
   </ul>
  
  <div class="card-button">
    <button class="see-projects ${popupClass}">See Projects</button>
  </div>
  </li>`;

const generateProjectCardsAttr = () => {
  imageAttributesArray.forEach((attributes) => {
    const projectCard = generateProjectCard(
      attributes.src,
      attributes.title,
      attributes.alt,
      attributes.class,
      attributes.tagLi,
    );
    cardUl.innerHTML += projectCard;
  });
};

generateProjectCardsAttr();

const seeProjectTonicBtn = document.querySelector('.tonic-popup');
const seeProjectTonicTwoBtn = document.querySelector('.tonic-two-popup');
const multiPostPopup = document.querySelector('.multipost-popup');
const multiPostTwoPopup = document.querySelector('.multipost-two-popup');
const faceBookPopup = document.querySelector('.facebook-popup');
const naturePopup = document.querySelector('.nature-popup');

const projectCardImages = {
  zero: 'images/tonic.png',
  one: 'images/tonic2.png',
  two: 'images/multipost.png',
  three: 'images/multipost2.png',
  four: 'images/facebook.png',
  five: 'images/nature.png',
};

seeProjectTonicBtn.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.zero;
});

seeProjectTonicTwoBtn.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.one;
});

multiPostPopup.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.two;
});

multiPostTwoPopup.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.three;
});

faceBookPopup.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.four;
});

naturePopup.addEventListener('click', function () {
  PopUpCardContainer.classList.remove('d-none');
  PopUpCardContainer.classList.add('d-flex');
  popUpCardImage.src = projectCardImages.five;
});
