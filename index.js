const listItems = document.getElementById("myList");
const barsIcon = document.getElementById("barsIcon");
const closeIcon = document.getElementById("closeIcon");

function barFunction() {
 if (barsIcon) { 
  return (
   listItems.classList.remove('hidden'),
   listItems.classList.add('top-16'),
   closeIcon.classList.replace('hidden', 'block'),
   barsIcon.classList.replace('block', 'hidden'));
 }
 else {
  barsIcon.style.display = '';
 }
}
function closeFunction() {
 if (closeIcon ) {
  return (
   listItems.classList.add('hidden'), listItems.classList.remove('top-16'),
   closeIcon.classList.replace('block', 'hidden'),
   barsIcon.classList.replace('hidden', 'block'));
 }
 else {
  barsIcon.style.display = "block";
  closeIcon.style.display = "none";
 }
}