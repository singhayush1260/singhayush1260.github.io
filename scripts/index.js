let visualizeBtn = document.getElementById("visualizeBtn");
visualizeBtn.addEventListener("click", selectAlgorithm);
function selectAlgorithm() {
  const option = document.querySelector(".form-select");
  const algorithm = option.selectedIndex;
  switch (algorithm) {
    case 0:
      displayWarning();
      break;
    case 1:
      selectionSort();
      break;
    case 2:
      bubbleSort();
      break;
    case 3:
      insertionSort();
      break;
    case 4:
      startQuickSort();
      break;
    case 5:
      startMergeSort();
      break;
    default:
      console.log("default");
  }
}
function displayWarning()
{
  const warn=document.querySelector('.warning');
  console.log(warn);
  warn.classList.remove('warning');
  warn.classList.add('alert', 'alert-dismissible', 'alert-danger');
  let closeBtn = document.querySelector(".btn-close");
  console.log(closeBtn)
  closeBtn.addEventListener('click',()=>{
    warn.classList.remove('alert', 'alert-dismissible', 'alert-danger');
    warn.classList.add('warning');
  })
}