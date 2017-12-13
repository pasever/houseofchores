
$('#add-task').on('click', function() {
  
  let day = $('#sel1').val();
  let task = $('#sel2').val();
  
  console.log('Day', day);
  console.log('Task', task);
  
});

var data = [
  {
    id: 1,
    src: "http://fancygrid.com/images/staff/boy-4.png",
    name: 'Ted',
    monday: `$(www.google.com)`,
    tuesday: ''
    

  }, {
    id: 2,
    src: "http://fancygrid.com/images/staff/boy-1.png",
    name: 'Ed',
    surname: 'Johnson',
    position: 'C/C++ Market Data Developer',
    email: 'ed.johnson@gmail.com',
    company: 'Energy and Oil',
    age: 35,
    education: 'High School Of Cambridge',
    knownledge: 'C++'
  }, {
    id: 3,
    src: "http://fancygrid.com/images/staff/boy-2.png",
    name: 'Sam',
    surname: 'Williams',
    position: 'Technical Analyst',
    email: 'sam.williams@gmail.com',
    company: 'Airbus',
    age: 38,
    education: 'High School Of Cambridge',
    knownledge: 'Javascript'
  }, {
    id: 4,
    src: "http://fancygrid.com/images/staff/boy-3.png",
    name: 'Alexander',
    surname: 'Brown',
    position: 'Project Manager',
    email: 'alexander.brown@gmail.com',
    company: 'Renault',
    age: 24,
    education: 'High School Of Cambridge',
    knownledge: ''
  }, {
    id: 5,
    src: "http://fancygrid.com/images/staff/boy-5.png",
    name: 'Nicholas',
    surname: 'Miller',
    position: 'Senior Software Engineer',
    email: 'nicholas.miller@gmail.com',
    company: 'Adobe',
    age: 33,
    education: 'High School Of Cambridge',
    knownledge: 'Unix, C/C++'
  }
];

$(function() {

  var grid = new FancyGrid({
    theme: 'dark',
    renderTo: 'container',
    title: 'House of ${HouseOfChores Name}',
    width: 1150,
    height: 565,
    cellHeight: 100,
    data: data,
    selModel: 'cells',
    defaults: {
      type: 'string',
      width: 150,
      sortable: true,
      resizable: true,
      ellipsis: true
    },
    columnLines: false,
    tableLines: false,
    columns: [
      {
        index: 'id',
        title: '',
        locked: true,
        width: 50,
        type: 'number',
        align: 'center',
        cls: 'id-column-cls',
      }, {
        type: 'image',
        title: 'Photo',
        index: 'src',
        width: 120,
        cls: 'photo',
        align: 'center'
      }, {
        index: 'name',
        title: 'Name',
        width: 100,
        cls: 'id-column-cls',
        align: 'center'
      }, {
        index: 'monday',
        title: 'Monday',
        align: 'center',
        cellAlign: 'center'
      }, {
        index: 'tuesday',
        title: 'Tuesday',
        align: 'center',
        cellAlign: 'center'
      }, {
        index: 'wednesday',
        title: 'Wednesday',
        align: 'center',
        cellAlign: 'center'
      }, {
        index: 'thursday',
        title: 'Thursday',
        align: 'center',
        cellAlign: 'center'
      }, {
        index: 'friday',
        title: 'Friday',
        align: 'center',
        cellAlign: 'center'
      }, {
        index: 'saturday',
        title: 'Saturday',
        align: 'center',
        cellAlign: 'center'
      }, {
        index: 'sunday',
        title: 'Sunday',
        align: 'center',
        cellAlign: 'center'
      }
    ]
  });

});


// var ChoresList = document.getElementsByTagName("LI");
// 
// for (var i = 0; i < ChoresList.length; i++) {
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   ChoresList[i].appendChild(span);
// }
// 
// // Click on a close button to hide the current list item
// var close = document.getElementsByClassName("close");
// for (var i = 0; i < close.length; i++) {
//   close[i].onclick = function() {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
// 
// // // Add a "checked" symbol when clicking on a list item
// // var list = document.querySelector('ul');
// // list.addEventListener('click', function(ev) {
// //   if (ev.target.tagName === 'LI') {
// //     ev.target.classList.toggle('checked');
// //   }
// // }, false);
// 
// // Create a new list item when clicking on the "Add" button
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
// 
//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);
// 
//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }