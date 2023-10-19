const campfire = $('.campfire');
const balance = $('.balance');
const sun = $('.sun');
const rockyroad = $('.rockyroad');
const sunset = $('.sunset');
const bluesnail = $('.bluesnail');
const goat = $('.goat');
const mountain = $('.mountain');
const allPhoto = [campfire,balance,sun,rockyroad,sunset,bluesnail,goat,mountain];

const primary = $('.primary');
const photo = $('.primary img');
const heading = $('#desc-heading');
const photoReplace = ()=>{
    $('.gallery-photo').removeClass('selected');
    photo.attr('src',`images/${allPhoto[pictureIndex].attr('class').split(' ')[0]}.jpg`);
    heading.text(allPhoto[pictureIndex].attr('data-title'));
    allPhoto[pictureIndex].addClass('selected');
}
var pictureIndex =  0;
photoReplace();

$('.dec').click(()=>{
    if(pictureIndex === 0)
        pictureIndex = allPhoto.length;
    pictureIndex--;
    photoReplace();
});
$('.inc').click(()=>{
    pictureIndex++;
    if(pictureIndex === allPhoto.length)
        pictureIndex = 0;
    photoReplace();
});
$('.gallery').children().click((e)=>{
   const element = e.target;
   $('.gallery-photo').removeClass('selected');
   element.classList.add('selected'); 
   pictureIndex = allPhoto.findIndex(x => x[0].classList.item(0) == element.classList.item(0));
   photoReplace()
});