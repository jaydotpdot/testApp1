/**
 * Load "month" events into data array
 * @param {Array} data    An empty array
 * @return {Array} data   An array full of hardcoded "month" events
 *                        for the current year
 */
var loadMonthEvents = function (data) {
    if (!data.length) {
        data.push({
            id: "Jan-" + new Date().getFullYear().toString(),
            start: new Date(2016, 0, 1), // first day of month
            end: new Date(2016, 1, 0), // last day of month  
            content: "Sort by: January",
            type: "range",
            className: "month-item"
        });
        data.push({
            id: "Feb-" + new Date().getFullYear().toString(),
            start: new Date(2016, 1, 1), // first day of month
            end: new Date(2016, 2, 0), // last day of month  
            content: "Sort by: February",
            type: "range",
            className: "month-item"
        });
        data.push({
            id: "Mar-" + new Date().getFullYear().toString(),
            start: new Date(2016, 2, 1), // first day of month
            end: new Date(2016, 3, 0), // last day of month  
            content: "Sort by: March",
            type: "range",
            className: "month-item"
        });
        data.push({
            id: "Apr-" + new Date().getFullYear().toString(),
            start: new Date(2016, 3, 1), // first day of month
            end: new Date(2016, 4, 0), // last day of month  
            content: "Sort by: April",
            type: "range",
            className: "month-item"
        });
        data.push({
            id: "May-" + new Date().getFullYear().toString(),
            start: new Date(2016, 4, 1), // first day of month
            end: new Date(2016, 5, 0), // last day of month  
            content: "Sort by: May",
            type: "range",
            className: "month-item"
        });
        data.push({
            id: "Jun-" + new Date().getFullYear().toString(),
            start: new Date(2016, 5, 1), // first day of month
            end: new Date(2016, 6, 0), // last day of month  
            content: "Sort by: June",
            type: "range",
            className: "month-item"
        });
        data.push({
            id: "Jul-" + new Date().getFullYear().toString(),
            start: new Date(2016, 6, 1), // first day of month
            end: new Date(2016, 7, 0), // last day of month  
            content: "Sort by: July",
            type: "range",
            className: "month-item"
        });
        data.push({
            id: "Aug-" + new Date().getFullYear().toString(),
            start: new Date(2016, 7, 1), // first day of month
            end: new Date(2016, 8, 0), // last day of month  
            content: "Sort by: August",
            type: "range",
            className: "month-item"
        });
        data.push({
            id: "Sep-" + new Date().getFullYear().toString(),
            start: new Date(2016, 8, 1), // first day of month
            end: new Date(2016, 9, 0), // last day of month  
            content: "Sort by: September",
            type: "range",
            className: "month-item"
        });
        data.push({
            id: "Oct-" + new Date().getFullYear().toString(),
            start: new Date(2016, 9, 1), // first day of month
            end: new Date(2016, 10, 0), // last day of month  
            content: "Sort by: October",
            type: "range",
            className: "month-item"
        });
        data.push({
            id: "Nov-" + new Date().getFullYear().toString(),
            start: new Date(2016, 10, 1), // first day of month
            end: new Date(2016, 11, 0), // last day of month  
            content: "Sort by: November",
            type: "range",
            className: "month-item"
        });
        data.push({
            id: "Dec-" + new Date().getFullYear().toString(),
            start: new Date(2016, 11, 1), // first day of month
            end: new Date(2016, 12, 0), // last day of month  
            content: "Sort by: December",
            type: "range",
            className: "month-item"
        });
    }
    else {
        throw "Expected empty array."
    }
    return data;
}

/**
 * Fetch event data
 * @return Array data     An array of JSON objects
 */
var fetchEcEventData = function () {
    // don't need description    
    // DO need type = "range"
    // DO need className = "category" // for identifying different categories of events in timeline
    var data = [];
    data = loadMonthEvents(data);
    // add items for the months   

    // event data
    data.push({
        id: "5",
        start: new Date(2016, 4, 2),
        end: new Date(2016, 4, 8),
        content: "Mental Health Awareness",
        type: "range",
        linkTo: "https://mentalhealthweek.cmha.ca/news-and-events/events/alberta/",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "6",
        start: new Date(2016, 5, 1),
        end: new Date(2016, 5, 30),
        content: "End of School Year",
        type: "range",
        linkTo: "",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "7",
        start: new Date(2016, 5, 21),
        end: new Date(2016, 5, 21),
        content: "National Aboriginal Day",
        type: "range",
        linkTo: "https://www.aadnc-aandc.gc.ca/eng/1100100013248/1100100013249",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "9",
        start: new Date(2016, 7, 15),
        end: new Date(2016, 8, 1),
        content: "Back to School",
        type: "range",
        linkTo: "",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "12",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 18),
        content: "International Education Week",
        type: "range",
        linkTo: "https://education.alberta.ca/international-education-week-iew/what-is-iew/",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "13",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 20),
        content: "Bullying Awareness Week",
        type: "range",
        linkTo: "http://humanservices.alberta.ca/abuse-bullying/bullying-get-help.html",
        className: "event-item"//'
        //group: "Ministry"
    });
    return data;
}

/**
 * Fetch event data
 * @return Array data     An array of JSON objects
 */
var fetchElEventData = function () {
    // don't need description    
    // DO need type = "range"
    // DO need className = "category" // for identifying different categories of events in timeline
    var data = [];
    data = loadMonthEvents(data);
    // add items for the months   

    // event data
    data.push({
        id: "5",
        start: new Date(2016, 4, 2),
        end: new Date(2016, 4, 8),
        content: "Mental Health Awareness",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "6",
        start: new Date(2016, 5, 1),
        end: new Date(2016, 5, 30),
        content: "End of School Year",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "7",
        start: new Date(2016, 5, 21),
        end: new Date(2016, 5, 21),
        content: "National Aboriginal Day",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "9",
        start: new Date(2016, 7, 15),
        end: new Date(2016, 8, 1),
        content: "Back to School",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "12",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 18),
        content: "International Education Week",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "13",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 20),
        content: "Bullying Awareness Week",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    return data;
}

/**
 * Fetch event data
 * @return Array data     An array of JSON objects
 */
var fetchJhEventData = function () {
    // don't need description    
    // DO need type = "range"
    // DO need className = "category" // for identifying different categories of events in timeline
    var data = [];
    data = loadMonthEvents(data);
    // add items for the months   

    // event data
    data.push({
        id: "5",
        start: new Date(2016, 4, 2),
        end: new Date(2016, 4, 8),
        content: "Mental Health Awareness",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "6",
        start: new Date(2016, 5, 1),
        end: new Date(2016, 5, 30),
        content: "End of School Year",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "7",
        start: new Date(2016, 5, 21),
        end: new Date(2016, 5, 21),
        content: "National Aboriginal Day",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "9",
        start: new Date(2016, 7, 15),
        end: new Date(2016, 8, 1),
        content: "Back to School",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "12",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 18),
        content: "International Education Week",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "13",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 20),
        content: "Bullying Awareness Week",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    return data;
}

/**
 * Fetch event data
 * @return Array data     An array of JSON objects
 */
var fetchHsEventData = function () {
    // don't need description    
    // DO need type = "range"
    // DO need className = "category" // for identifying different categories of events in timeline
    var data = [];
    data = loadMonthEvents(data);
    // add items for the months   

    // event data
    data.push({
        id: "1",
        start: new Date(2016, 0, 13),
        end: new Date(2016, 0, 28),
        content: "Diploma Exams",
        type: "range",
        className: "event-item"//,
        //group: "Ministry"//
    });
    data.push({
        id: "2",
        start: new Date(2016, 1, 16),
        end: new Date(2016, 1, 16),  // same date as start
        content: "Transcripts - February",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "3",
        start: new Date(2016, 2, 1),
        end: new Date(2016, 2, 11),
        content: "Diplomas Awarding March",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "4",
        start: new Date(2016, 3, 28),
        end: new Date(2016, 3, 28),  // same date as start
        content: "Transcripts - April",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "5",
        start: new Date(2016, 4, 2),
        end: new Date(2016, 4, 8),
        content: "Mental Health Awareness",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "6",
        start: new Date(2016, 5, 1),
        end: new Date(2016, 5, 30),
        content: "End of School Year",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "7",
        start: new Date(2016, 5, 21),
        end: new Date(2016, 5, 21),
        content: "National Aboriginal Day",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "8",
        start: new Date(2016, 6, 14),
        end: new Date(2016, 6, 14),
        content: "Transcripts - July",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "9",
        start: new Date(2016, 7, 15),
        end: new Date(2016, 8, 1),
        content: "Back to School",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "10",
        start: new Date(2016, 7, 16),
        end: new Date(2016, 7, 31),
        content: "Diplomas Awarding August",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "11",
        start: new Date(2016, 7, 17),
        end: new Date(2016, 7, 17),
        content: "Transcripts - August",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "12",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 18),
        content: "International Education Week",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "13",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 20),
        content: "Bullying Awareness Week",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    return data;
}

/**
 * Fetch event data
 * @return Array data     An array of JSON objects
 */
var fetchSaEventData = function () {
    // don't need description    
    // DO need type = "range"
    // DO need className = "category" // for identifying different categories of events in timeline
    var data = [];
    data = loadMonthEvents(data);
    // add items for the months   

    // event data
    data.push({
        id: "1",
        start: new Date(2016, 0, 13),
        end: new Date(2016, 0, 28),
        content: "Diploma Exams",
        type: "range",
        className: "event-item"//,
        //group: "Ministry"//
    });
    data.push({
        id: "2",
        start: new Date(2016, 1, 16),
        end: new Date(2016, 1, 16),  // same date as start
        content: "Transcripts - February",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "3",
        start: new Date(2016, 2, 1),
        end: new Date(2016, 2, 11),
        content: "Diplomas Awarding March",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "4",
        start: new Date(2016, 3, 28),
        end: new Date(2016, 3, 28),  // same date as start
        content: "Transcripts - April",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "5",
        start: new Date(2016, 4, 2),
        end: new Date(2016, 4, 8),
        content: "Mental Health Awareness",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "7",
        start: new Date(2016, 5, 21),
        end: new Date(2016, 5, 21),
        content: "National Aboriginal Day",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "8",
        start: new Date(2016, 6, 14),
        end: new Date(2016, 6, 14),
        content: "Transcripts - July",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "9",
        start: new Date(2016, 7, 15),
        end: new Date(2016, 8, 1),
        content: "Back to School",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "10",
        start: new Date(2016, 7, 16),
        end: new Date(2016, 7, 31),
        content: "Diplomas Awarding August",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "11",
        start: new Date(2016, 7, 17),
        end: new Date(2016, 7, 17),
        content: "Transcripts - August",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "12",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 18),
        content: "International Education Week",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "13",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 20),
        content: "Bullying Awareness Week",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "14",
        start: new Date(2016, 10, 30),
        end: new Date(2016, 10, 30),
        content: "School Authority Plans",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    return data;
}

/**
 * Fetch event data
 * @return Array data     An array of JSON objects
 */
var fetchAllEventData = function () {
    // don't need description    
    // DO need type = "range"
    // DO need className = "category" // for identifying different categories of events in timeline
    var data = [];
    data = loadMonthEvents(data);
    // add items for the months   

    // event data
    data.push({
        id: "1",
        start: new Date(2016, 0, 13),
        end: new Date(2016, 0, 28),
        content: "Diploma Exams",
        type: "range",
        className: "event-item"//,
        //group: "Ministry"//
    });
    data.push({
        id: "2",
        start: new Date(2016, 1, 16),
        end: new Date(2016, 1, 16),  // same date as start
        content: "Transcripts - February",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "3",
        start: new Date(2016, 2, 1),
        end: new Date(2016, 2, 11),
        content: "Diplomas Awarding March",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "4",
        start: new Date(2016, 3, 28),
        end: new Date(2016, 3, 28),  // same date as start
        content: "Transcripts - April",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "5",
        start: new Date(2016, 4, 2),
        end: new Date(2016, 4, 8),
        content: "Mental Health Awareness",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "6",
        start: new Date(2016, 5, 1),
        end: new Date(2016, 5, 30),
        content: "End of School Year",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "7",
        start: new Date(2016, 5, 21),
        end: new Date(2016, 5, 21),
        content: "National Aboriginal Day",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "8",
        start: new Date(2016, 6, 14),
        end: new Date(2016, 6, 14),
        content: "Transcripts - July",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "9",
        start: new Date(2016, 7, 15),
        end: new Date(2016, 8, 1),
        content: "Back to School",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "10",
        start: new Date(2016, 7, 16),
        end: new Date(2016, 7, 31),
        content: "Diplomas Awarding August",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "11",
        start: new Date(2016, 7, 17),
        end: new Date(2016, 7, 17),
        content: "Transcripts - August",
        type: "range",
        className: "event-item"//'
        //group: "School"
    });
    data.push({
        id: "12",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 18),
        content: "International Education Week",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "13",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 20),
        content: "Bullying Awareness Week",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    data.push({
        id: "14",
        start: new Date(2016, 10, 30),
        end: new Date(2016, 10, 30),
        content: "School Authority Plans",
        type: "range",
        className: "event-item"//'
        //group: "Ministry"
    });
    return data;
}

/**
 * Fetch school event data
 * @return Array data     An array of JSON objects
 */
var fetchSchoolEventData = function () {
    // don't need description    
    // DO need type = "range"
    // DO need className = "category" // for identifying different categories of events in timeline
    var data = [];
    data = loadMonthEvents(data);

    data.push({
        id: "2",
        start: new Date(2016, 1, 16),
        end: new Date(2016, 1, 16),  // same date as start
        content: "Transcripts - February",
        type: "range",
        className: "event-item"/*,
    group: "School"*/
    });
    data.push({
        id: "3",
        start: new Date(2016, 2, 1),
        end: new Date(2016, 2, 11),
        content: "Diplomas Awarding March",
        type: "range",
        className: "event-item"/*,
    group: "School"*/
    });
    data.push({
        id: "4",
        start: new Date(2016, 3, 28),
        end: new Date(2016, 3, 28),  // same date as start
        content: "Transcripts - April",
        type: "range",
        className: "event-item"/*,
    group: "School"*/
    });
    data.push({
        id: "6",
        start: new Date(2016, 5, 1),
        end: new Date(2016, 5, 30),
        content: "End of School Year",
        type: "range",
        className: "event-item"/*,
    group: "School"*/
    });
    data.push({
        id: "8",
        start: new Date(2016, 6, 14),
        end: new Date(2016, 6, 14),
        content: "Transcripts - July",
        type: "range",
        className: "event-item"/*,
    group: "School"*/
    });
    data.push({
        id: "10",
        start: new Date(2016, 7, 16),
        end: new Date(2016, 7, 31),
        content: "Diplomas Awarding August",
        type: "range",
        className: "event-item"/*,
    group: "School"*/
    });
    data.push({
        id: "11",
        start: new Date(2016, 7, 17),
        end: new Date(2016, 7, 17),
        content: "Transcripts - August",
        type: "range",
        className: "event-item"/*,
    group: "School"*/
    });
    return data;
}

/**
 * Fetch ministry event data
 * @return Array data     An array of JSON objects
 */
var fetchMinistryEventData = function () {
    // don't need description    
    // DO need type = "range"
    // DO need className = "category" // for identifying different categories of events in timeline
    var data = [];
    data = loadMonthEvents(data);

    data.push({
        id: "1",
        start: new Date(2016, 0, 13),
        end: new Date(2016, 0, 28),
        content: "Diploma Exams",
        type: "range",
        className: "event-item"/*,
    group: "Ministry"*/
    });
    data.push({
        id: "5",
        start: new Date(2016, 4, 2),
        end: new Date(2016, 4, 8),
        content: "Mental Health Awareness",
        type: "range",
        className: "event-item"/*,
    group: "Ministry"*/
    });
    data.push({
        id: "7",
        start: new Date(2016, 5, 21),
        end: new Date(2016, 5, 21),
        content: "National Aboriginal Day",
        type: "range",
        className: "event-item"/*,
    group: "Ministry"*/
    });
    data.push({
        id: "9",
        start: new Date(2016, 7, 15),
        end: new Date(2016, 8, 1),
        content: "Back to School",
        type: "range",
        className: "event-item"/*,
    group: "Ministry"*/
    });
    data.push({
        id: "12",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 18),
        content: "International Education Week",
        type: "range",
        className: "event-item"/*,
    group: "Ministry"*/
    });
    data.push({
        id: "13",
        start: new Date(2016, 10, 14),
        end: new Date(2016, 10, 20),
        content: "Bullying Awareness Week",
        type: "range",
        className: "event-item"/*,
    group: "Ministry"*/
    });
    data.push({
        id: "14",
        start: new Date(2016, 10, 30),
        end: new Date(2016, 10, 30),
        content: "School Authority Plans",
        type: "range",
        className: "event-item"/*,
    group: "Ministry"*/
    });
    return data;
}

var browser = {
    isIe: function () {
        return navigator.appVersion.indexOf("MSIE") != -1;
    },
    navigator: navigator.appVersion,
    getVersion: function () {
        var version = 999; // we assume a sane browser
        if (navigator.appVersion.indexOf("MSIE") != -1)
            // bah, IE again, lets downgrade version number
            version = parseFloat(navigator.appVersion.split("MSIE")[1]);
        return version;
    },
    getWidth: function () {
        if (self.innerHeight) {
            return self.innerWidth;
        }
        if (document.documentElement && document.documentElement.clientWidth) {
            return document.documentElement.clientWidth;
        }
        if (document.body) {
            return document.body.clientWidth;
        }
    }
};


////var tlData = fetchAllEventData();

//var myTl = new tl(fetchEcEventData); // "en" is the default
//var myTl = tl(fetchAllEventData, "fr");

console.log(myTl);