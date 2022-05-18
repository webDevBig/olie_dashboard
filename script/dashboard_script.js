//for Scroll menu

const rightBtn = document.querySelector('#right-button');
const leftBtn = document.querySelector('#left-button');

rightBtn.addEventListener("click", function (event) {
    const conent = document.querySelector('#content');
    conent.scrollLeft += 110;
    event.preventDefault();
});

leftBtn.addEventListener("click", function (event) {
    const conent = document.querySelector('#content');
    conent.scrollLeft -= 110;
    event.preventDefault();
});


//show content when click on tabs
const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)


        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})



//check all rows
var tr = document.getElementsByTagName('tr');
var checkboxes = document.getElementsByName('checkbox_row');
var selected_el = document.querySelector('.selected_box');
var k = 0;

function toggle(source) {
    k == 0;
    for (var i = 0, n = checkboxes.length; i < n; i++) {
        checkboxes[i].checked = source.checked;
        checkboxes[i].parentElement.parentElement.parentElement.classList.toggle('check_row')
        k = n;
        document.querySelector('.number_selected').textContent = k + ' items selected';
        if (source.checked) {
            if (!selected_el.classList.contains('show')) {
                selected_el.classList.toggle('show')
            }
        } else {
            selected_el.classList.remove('show')
            k = 0;
        }

    }
}


//show number of selected rows
checkboxes.forEach(function (checkitem) {
    var value = checkitem.value;
    checkitem.addEventListener('change', (event) => {
        checkitem.parentElement.parentElement.parentElement.classList.toggle('check_row');

        k == 0;
        if (checkitem.checked) {
            selected_el.classList.add('show');
            k++;



        } else {
            k--;
            if (k == 0) {
                selected_el.classList.remove('show');
                k == 0;
            }
        }
        document.querySelector('.number_selected').textContent = k + ' items selected';

    })

});




//show table rows

function Pager(tableName, itemsPerPage) {
    'use strict';

    this.tableName = tableName;
    this.itemsPerPage = itemsPerPage;
    this.currentPage = 1;
    this.pages = 0;
    this.inited = false;





    this.showRecords = function (from, to) {
        let rows = document.getElementById(tableName).rows;

        // i starts from 1 to skip table header row
        for (let i = 1; i < rows.length; i++) {
            if (i < from || i > to) {
                rows[i].style.display = 'none';

            } else {
                rows[i].style.display = '';

            }
        }
    };


    this.showPage = function (pageNumber) {
        if (!this.inited) {
            // Not initialized
            return;
        }
        let from = (pageNumber - 1) * itemsPerPage + 1;
        let to = from + itemsPerPage - 1;
        this.showRecords(from, to);
    };

    this.prev = function () {
        if (this.currentPage > 1) {
            this.showPage(this.currentPage - 1);
        }
    };

    this.next = function () {
        if (this.currentPage < this.pages) {
            this.showPage(this.currentPage + 1);
        }
    };

    this.init = function () {
        let rows = document.getElementById(tableName).rows;
        let records = (rows.length - 1);

        this.pages = Math.ceil(records / itemsPerPage);
        this.inited = true;
    };

}


let pager = new Pager('pager', 16);

pager.init();
pager.showPage(1);



//open pop up when click on user avatar
var avatar = document.querySelector('.avatar');
var avatar_popUp = document.querySelector('.avatar_pop_up_show');

avatar.addEventListener("click", function (event) {
    avatar_popUp.classList.toggle('show')
});



//open help pop up
var help_box = document.querySelector('.help_box');
var help_box_popUp = document.querySelector('.help_pop_up_show');

help_box.addEventListener("click", function (event) {
    help_box_popUp.classList.toggle('show')

});

//open carriers box
var carriers_show = document.querySelector('.carriers_show');
var carriers_box = document.querySelector('.carriers_box');

var close_menu = document.querySelectorAll('.close_btn');
carriers_show.addEventListener("click", function (event) {
    carriers_box.classList.toggle('show')
});

//open settings box
var settings_show = document.querySelector('.settings_show');
var settings_box = document.querySelector('.settings_box');
settings_show.addEventListener("click", function (event) {
    settings_box.classList.toggle('show')
});


close_menu.forEach(function (el, key) {

    el.addEventListener('click', function () {
        el.parentElement.parentElement.classList.toggle("show");

    });
});


//menu script
document.addEventListener("DOMContentLoaded", function (event) {
    var element = document.querySelectorAll('.menu_item');

    if (element) {

        element.forEach(function (el, key) {

            el.addEventListener('click', function () {
                el.classList.toggle("active");

                element.forEach(function (ell, els) {
                    if (key !== els) {
                        ell.classList.remove('active');
                    }
                });
            });
        });
    }
});


// Detect all clicks on the document
document.addEventListener("click", function (event) {
    // If user clicks inside the element, do nothing
    if (event.target.closest(".carriers_show, .carriers_box")) return;

    // If user clicks outside the element, hide it!

    carriers_box.classList.remove('show')

});
document.addEventListener("click", function (event) {

    if (event.target.closest(".settings_show, .settings_box")) return;

    //      If user clicks outside the element, hide it!  
    settings_box.classList.remove('show')
});




var open_list = document.querySelectorAll('.open_list');
open_list.forEach(function (el, key) {

    el.addEventListener('click', function () {
        el.parentElement.classList.toggle("show");
    });
});
