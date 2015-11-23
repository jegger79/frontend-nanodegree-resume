

var bio = {
	"name" : "Jason Gordon",
	"role" : "Front-End Web Wizard",
	"contacts": {
		"email": "jegger79@gmail.com",
		"phone": "206-551-3531",
		"github": "jegger79",
		"twitter": "jegman79",
		"location": "Seattle"
	},
	"welcomeMessage" : "Welcome to my JQuery-built resume page",
	"skills": [
		"HTML/CSS", "Javascript", "JQuery", "Writing/Editing", "Graphic Design"
		],
	"biopic": "images/jason_gordon.png"
}

var work = {
	"jobs": [
		{
			"employer": "University of Washington",
			"title": "Program Manager",
			"location": "Seattle, WA",
			"dates" : "2014-present",
			"description": "Manager UW Center for Health and The Global Environment"
		},
		{
			"employer": "University of Washington",
			"title": "HR Manager",
			"location": "Seattle, WA",
			"dates" : "2012-2014",
			"description": "HR Manager UW Division of Allergy and Infectious Diseases"
		}
	]
}



var education = {
	"schools": [
		{
			"name": "Texas A&M University",
			"location": "College Station, TX",
			"degree": "B.S. Psychology",
			"dates": "1998-2002"
		},
		{
			"name": "University of Washington",
			"location": "Seattle",
			"degree": "Masters Public Administation",
			"dates": "2008-2011"
		},
		{
			"name": "University of Washington",
			"location": "Seattle",
			"degree": "Masters International Studies",
			"dates": "2008-2011"
		}
	],
	"onlineCourses": [
		{
			"title": "Javascript Basics",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		},
		{
			"title": "Intro to Jquery",
			"school": "Udacity",
			"dates": 2015,
			"url": "http://www.udacity.com"
		}

	]
}

var projects = {
	"projects": [
		{
			"title": "Awesome Project 1",
			"dates": "2015-present",
			"description": "Held hands in circle.",
			"images": ["images/project2.jpg"]
		},
		{
			"title": "Amazing Project 2",
			"dates": "2015-present",
			"description": "Drew shapes on board.",
			"images": ["images/project1.png"]
		}
	]
}


function displayBio() {

	if(bio.role.length > 0){
		var formattedHeaderRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedHeaderRole);
	}

	if(bio.name.length > 0){
		var formattedHeaderName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedHeaderName);
	}

	if(bio.biopic.length > 0){
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedBioPic);
	}

	if(bio.welcomeMessage.length > 0){
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);
	}

	if(bio.skills.length > 0){
		$("#header").append(HTMLskillsStart);
		for(var skill in bio.skills){
			if(skill.length > 0){
				$("#skills:last").append(HTMLskills.replace("%data%", bio.skills[skill]));
			}
		}

	}

	if(bio.contacts.email.length > 0){
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
	}

	if(bio.contacts.twitter.length > 0){
		var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#topContacts").append(formattedTwitter);
	}

	if(bio.contacts.github.length > 0){
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
	}

	if(bio.contacts.location.length > 0){
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
	}


	}

displayBio();


function displayWork() {

	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;
		var formattedEmployerLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedEmployerDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedEmployerLocation);
		$(".work-entry:last").append(formattedEmployerDates);
		$(".work-entry:last").append(formattedDescription);
	}

}

displayWork();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

	if (projects.projects[project].images.length > 0) {
		for (image in projects.projects[project].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}

	}

}

projects.display();


function displayEducation() {
	for (school in education.schools) {
		$('#education').append(HTMLschoolStart);
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolLocation);
	}


	$("#online").append(HTMLonlineClasses);

	for (onlineCourse in education.onlineCourses) {
		var formattedOnlineClassName = HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title);
		var formattedOnlineClassSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school);
		var formattedOnlineClassURL = HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url);
		var schoolTitle = formattedOnlineClassName + formattedOnlineClassSchool;

		$(".online-classes:last").append(schoolTitle);
		//$("h3:last").append(formattedOnlineClassURL);
	}
}

displayEducation();



// $("#main").append(internationalizeButton);

//map
$("#mapDiv").append(googleMap);

function inName(name) {
name = name.trim().split(" ");
name[1] = name[1].toUpperCase();
name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
return name[0] + " " + name[1];

}

