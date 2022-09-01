function startQuickSort() {
    let bars = document.querySelectorAll(".bar");
    quickSort(bars, ar, hr, 0, ar.length - 1);
    console.log("program ended");
    
  }
  
  async function quickSort(bars, ar, hr, l, r) {
    if (l < r) {
      let i = await partition(bars, ar, hr, l, r);
      bars[i].style.backgroundColor = " rgb(49, 226, 13)";
      console.log("i val:", i);
      quickSort(bars, ar, hr, l, i - 1);
      quickSort(bars, ar, hr, i + 1, r);
    }
  }
  async function partition(bars, ar, hr, l, r) {
    let pivot = ar[l];
    let start = l;
    let end = r;
    while (start < end) {
      while (ar[start] <= pivot) {
        bars[start].style.background = "red";
  
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 200)
        );
        bars[start].style.backgroundColor = "  rgb(24, 190, 255)";
        start++;
      }
      while (ar[end] > pivot) {
        bars[end].style.background = "red";
  
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          }, 200)
        );
        bars[end].style.backgroundColor = "  rgb(24, 190, 255)";
        end--;
      }
  
      if (start < end) {
        let temp = ar[start];
        ar[start] = ar[end];
        ar[end] = temp;
        temp = hr[start];
        hr[start] = hr[end];
        hr[end] = temp;
  
        bars[start].style.height = `${hr[start]}px`;
        bars[start].childNodes[0].innerText = ar[start];
        setTimeout(() => {
          resolve();
        }, 2000);
        bars[end].style.height = `${hr[end]}px`;
        bars[end].childNodes[0].innerText = ar[end];
      }
    }
    temp = ar[end];
    ar[end] = ar[l];
    ar[l] = temp;
  
    temp = hr[end];
    hr[end] = hr[l];
    hr[l] = temp;
    setTimeout(() => {
      resolve();
    }, 2000);
    bars[end].style.height = `${hr[end]}px`;
    bars[end].childNodes[0].innerText = ar[end];
    bars[l].style.height = `${hr[l]}px`;
    bars[l].childNodes[0].innerText = ar[l];
  
    //bars[end].style.backgroundColor = " rgb(49, 226, 13)";// light green
    return end;
  }