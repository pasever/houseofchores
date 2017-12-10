var data = [{
  id: 1,
  name: 'Ted',
  surname: 'Smith',
  position: 'Java Developer',
  email: 'ted.smith@gmail.com',
  company: 'Electrical Systems',
  age: 30,
  education: 'High School Of Cambridge',
  knownledge: 'Java, Ruby'
}, {
  id: 2,
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
  name: 'Sam',
  surname: 'Williams',
  position: 'Technical Analyst',
  email: 'sam.williams@gmail.com',
  company: 'Airbus',
  age: 38,
  education: 'High School Of Cambridge',
  knownledge: ''
}, {
  id: 4,
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
  name: 'Nicholas',
  surname: 'Miller',
  position: 'Senior Software Engineer',
  email: 'nicholas.miller@gmail.com',
  company: 'Adobe',
  age: 33,
  education: 'High School Of Cambridge',
  knownledge: 'Unix, C/C++'
}, {
  id: 6,
  name: 'Andrew',
  surname: 'Thompson',
  position: 'Agile Project Manager',
  email: 'andrew.thompson@gmail.com',
  company: 'Google',
  age: 28,
  education: 'High School Of Cambridge',
  knownledge: ''
}, {
  id: 7,
  name: 'Ryan',
  surname: 'Walker',
  position: 'Application Support Engineer',
  email: 'ryan.walker@gmail.com',
  company: 'Siemens',
  age: 39,
  education: 'High School Of Cambridge',
  knownledge: 'ActionScript'
}, {
  id: 8,
  name: 'John',
  surname: 'Scott',
  position: 'Flex Developer',
  email: 'john.scott@gmail.com',
  company: 'Cargo',
  age: 45,
  education: 'High School Of Cambridge',
  knownledge: 'Flex'
}, {
  id: 9,
  name: 'James',
  surname: 'Phillips',
  position: 'Senior C++/C# Developer',
  email: 'james.phillips@gmail.com',
  company: 'Pro bugs',
  age: 30,
  education: 'High School Of Cambridge',
  knownledge: 'C/C++, Unix'
}, {
  id: 10,
  name: 'Brian',
  surname: 'Edwards',
  position: 'UNIX/C++ Developer',
  email: 'brian.edwards@gmail.com',
  company: 'IT Consultant',
  age: 23,
  education: 'High School Of Cambridge',
  knownledge: 'C/C++ Unix'
}];

$(function() {

var grid = new FancyGrid({
  renderTo: 'container',
  title: 'House of ${HouseOfChores Name}',
  width: 800,
  height: 400,
  data: data,
  selModel: 'cells',
  tbar: [{
    type: 'segbutton',
    items: [{
      text: '1 Day',
      toggleGroup: 'sel',
      handler: function(b) {
        grid.setSelModel('columns');
      }
    }, {
      text: '3 days',
      toggleGroup: 'sel',
      handler: function(b) {
        grid.setSelModel('row');
      }
    }, {
      text: '7 Days',
      toggleGroup: 'sel',
      handler: function(b) {
        grid.setSelModel('rows');
      }
    }, {
      text: '30 Days',
      toggleGroup: 'sel',
      handler: function(b) {
        grid.setSelModel('rows');
      }
    }]
  }],
  defaults: {
    type: 'string',
    width: 100,
    sortable: true,
    resizable: true,
	  ellipsis: true
  },
  columns: [{
    index: 'id',
    title: 'Id',
    locked: true,
    width: 50,
    type: 'number'
  }, {
    index: 'company',
    title: 'User'
  }, {
    index: 'name',
    title: 'Name'
  }, {
    index: 'surname',
    title: 'Sur Name'
  }, {
    index: 'age',
    title: 'Age',
    type: 'number'
  }, {
    index: 'knownledge',
    title: 'Knownledge',
    width: 100
  }, {
    index: 'position',
    title: 'Position in the Family',
    rightLocked: true,
    width: 100
  }]
});

});