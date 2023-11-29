import { bubleSort, quickSort, countingSort, insertionSort, mergeSort, selectionSort, radixSortLSD} from "../fuctions/sorting";
import { slideData } from "../types/slide";

export const presentaion = [
  {
    title: "Let's start with a few obvious things",
    content: '<h4>What is sorting?</h4> <p><em>Sorting</em> is an operation that segregates items into groups according to specified criterion</p>  <p class="center" >EXAMPLE:</p> <p class="center" >A = { 0 2 5 17 12 1 1 3} → A" = { 0 1 1 2 3 5 12 17 } </p>  <h4>Sorting algorithms</h4> <p>There are many, many different types of sorting algorithms. The primary ones are:</p> <p class="center" >Bubble Sort | Insertion Sort</p> <p class="center" >Merge Sort | Quick Sort</p> <p class="center">Radix Sort | Selection Sort</p> <p class="center">Shell Sort | Swap Sort</p>  <p class="center">Cube Sort | Comparison Sort</p> <br>',
    visualizer: false,
  } as slideData,
  {
    title: "Why can't we use just one sorting algorithm?",
    content: `<img src="https://i.imgflip.com/4/65939r.jpg" alt="no?"><p>We cannot use just one sorting algorithm because different algorithms have varying strengths and weaknesses depending on the size and nature of the data. Some algorithms perform better in certain scenarios, and the choice of the sorting algorithm depends on factors such as the size of the dataset, the distribution of data, and the efficiency requirements of the specific application.</p>`,
    visualizer: false,
  } as slideData,
  {
    title: "What is the complexity of a sorting algorithm?",
    content: `<p>The complexity of a sorting algorithm refers to the efficiency and resource requirements of the algorithm in relation to the size of the input data. It is commonly expressed using Big O notation. Examples of sorting algorithm complexities include O(n^2) for algorithms like Bubble Sort and Selection Sort, O(n log n) for more efficient algorithms like Merge Sort and Quick Sort, and linear time complexity O(n) for algorithms like Counting Sort when specific conditions are met.</p><h5>O(n^2):</h5><p class="center">Bubble Sort; Selection Sort; Insertion Sort<h5>O(n log n):</h5><p class="center">Merge Sort, Quick Sort, Heap Sort</p><h5>O(n):</h5><p class="center"> Counting Sort & Radix Sort (but under specific conditions)</p>`,
    visualizer: false,
  } as slideData,
  
  {
    title: "Bubble Sort",
    content: `<p>Bubble sort is a simple sorting algorithm that repeatedly steps through the list, compares adjoining elements, and swaps them if they are in the wrong order.The pass through the list is repeated until the list is sorted.The algorithm is named for the way smaller elements 'bubble' to the top of the list, while larger elements 'sink' to the bottom.</p>`,
    visualizer: true,
    visualizerProps: {
      algorithm: bubleSort,
      sortName: "",
      animationProps: {
        sleepTime: 1,
        everyNth: 2,
        arrSize: 128,
        canvasSize: {
          width: 1024,
          height: 400,
        },
      },
      controlsEnabled: {
        play: true,
        shuffle: true,
        shuffleStyle: true,
      },
    },
  } as slideData,
  {
    title: "Quick Sort",
    content: "<p>QuickSort, developed by Tony Hoare in 1960, is a comparison sort algorithm. It selects a pivot element from the array, partitions the other elements into two sub-arrays based on their relationship to the pivot, and recursively sorts them. The time complexity is O(n log n) on average, making it efficient for large datasets. However, in the worst case, with poor pivot selection, it can degrade to O(n^2). Widely used in practice, QuickSort is often the default sorting algorithm in many programming libraries.</p>",
    visualizer: true,
    visualizerProps: {
      algorithm: quickSort,
      sortName: "",
      animationProps: {
        sleepTime: 1,
        everyNth: 1,
        arrSize: 256,
        canvasSize: {
          width: 1024,
          height: 400,
        },
      },
      controlsEnabled: {
        play: true,
        shuffle: true,
        shuffleStyle: true,
      },
    },
  } as slideData,
  {
    title: "Counting Sort",
    content: `<p>Counting Sort efficiently sorts integers or objects with a small value range. It has linear time complexity, faster than traditional comparison-based sorting algorithms under certain conditions. The key assumption is that the range of input values should not be significantly larger than the number of elements in the array. If met , Counting Sort achieves linear time complexity O(n), where "n" is the number of elements. It is not suitable for sorting data with large value ranges or floating-point numbers.</p>`,
    visualizer: true,
    visualizerProps: {
      algorithm: countingSort,
      sortName: "",
      animationProps: {
        sleepTime: 2,
        everyNth: 4,
        arrSize: 128,
        canvasSize: {
          width: 1024,
          height: 400,
        },
      },
      controlsEnabled: {
        play: true,
        shuffle: true,
        shuffleStyle: true,
      },
    },
  } as slideData,
  {
    title: "Insertion Sort",
    content: `<p>Insertion Sort builds the final sorted array one element at a time by comparing and inserting each element into its correct position in the already sorted portion of the array. It is much less efficient on large lists than more advanced algorithms such as quicksort, heapsort, or merge sort. However, it has several advantages, including its simplicity, ease of implementation, and its ability to efficiently sort small datasets or partially sorted datasets.</p>`,
    visualizer: true,
    visualizerProps: {
      algorithm:insertionSort,
      sortName: "",
      animationProps: {
        sleepTime: 2,
        everyNth: 4,
        arrSize: 128,
        canvasSize: {
          width: 1024,
          height: 400,
        },
      },
      controlsEnabled: {
        play: true,
        shuffle: true,
        shuffleStyle: true,
      },
    },
  } as slideData,
  {
    title: "Merge Sort",
    content: `<p>Merge Sort is a divide-and-conquer algorithm that sorts an array by dividing it into smaller halves, recursively sorting them, and then merging the sorted halves to produce a fully sorted array. It guarantees a time complexity of O(n log n), making it efficient for large datasets.</p>`,
    visualizer: true,
    visualizerProps: {
      algorithm: mergeSort,
      sortName: "",
      animationProps: {
        sleepTime: 2,
        everyNth: 4,
        arrSize: 128,
        canvasSize: {
          width: 1024,
          height: 400,
        },
      },
      controlsEnabled: {
        play: true,
        shuffle: true,
        shuffleStyle: true,
      },
    },
  } as slideData,
  {
    title: "Selection Sort",
    content: `<p>Selection Sort iteratively selects the minimum element from the unsorted portion of the array and swaps it with the first unsorted element. This process is repeated until the entire array is sorted. Selection Sort has a time complexity of O(n^2), making it less efficient than more advanced algorithms for large datasets. However, it is easy to understand and implement.</p>`,
    visualizer: true,
    visualizerProps: {
      algorithm: selectionSort,
      sortName: "",
      animationProps: {
        sleepTime: 2,
        everyNth: 4,
        arrSize: 128,
        canvasSize: {
          width: 1024,
          height: 400,
        },
      },
      controlsEnabled: {
        play: true,
        shuffle: true,
        shuffleStyle: true,
      },
    },
  } as slideData,
  {
    title: "Radix Sort LSD",
    content: `<p>Radix Sort LSD (Least Significant Digit) is a non-comparative integer sorting algorithm that distributes elements into buckets based on individual digits at different positions. It starts by sorting the elements based on the least significant digit and progressively moves towards the most significant digit. This process is repeated until all digits are considered, resulting in a fully sorted array. Despite its linear time complexity, Radix Sort is often outperformed by more advanced comparison-based algorithms like QuickSort or MergeSort.</p>`,
    visualizer: true,
    visualizerProps: {
      algorithm: radixSortLSD,
      sortName: "",
      animationProps: {
        sleepTime: 6,
        everyNth: 1,
        arrSize: 128,
        canvasSize: {
          width: 1024,
          height: 400,
        },
      },
      controlsEnabled: {
        play: true,
        shuffle: true,
        shuffleStyle: true,
      },
    },
  } as slideData,
  {
    title: "Thanks for listening!",
    content: `<ul><li>Bitonic Sort</li><li>Block Sort</li><li>Bogo Sort</li><li>Bead Sort</li><li>Burstsort</li><li>Bubble Sort</li><li>Bucket Brigade Sort</li><li>Bucket Sort</li><li>Cocktail Shaker Sort</li><li>Coctail Sort</li><li>Comb Sort</li><li>Counting Sort</li><li>Cube Sort</li><li>Cycle Sort</li><li>Double Selection Sort</li><li>Flashsort</li><li>Franceschini's Algorithm</li><li>Gnome Sort</li><li>Heap Sort</li><li>Introsort</li><li>JSort</li><li>Library Sort</li><li>Merge Sort</li><li>Odd-even Sort (Batcher's Sort)</li><li>Pancake Sort</li><li>Pancake Sorting</li><li>Patience Sorting</li><li>Postman Sort</li><li>Quadsort</li><li>Quick Sort</li><li>Radix Sort</li><li>Reciprocal Sort</li><li>Recursive Bubble Sort</li><li>Recursive Insertion Sort</li><li>Selection Sort</li><li>Shell Sort</li><li>Shuffle Sort</li><li>Silverspoon Sort</li><li>Slow Sort</li><li>Smoothsort</li><li>Snowsort</li><li>Spreadsort</li><li>Stable Cocktail Sort</li><li>Stable Counting Sort</li><li>Stable Quick Sort</li><li>Stable Radix Sort</li><li>Stooge Sort</li><li>Strange Sort</li><li>Strand Sort</li><li>Tournament Sort</li><li>Topological Sort</li><li>Tree Sort</li><li>UnShuffle Sort</li><li>Vanilla Sort</li><li>Wiggle Sort</li><li>Weave Sort</li><li>Zoned Sort</li></ul>`,
    visualizer: false,
  } as slideData,
] as const;
