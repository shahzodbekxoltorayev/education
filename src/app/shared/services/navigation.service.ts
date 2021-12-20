import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface IMenuItem {
    id?: string;
    title?: string;
    description?: string;
    type: string;       // Possible values: link/dropDown/extLink
    name?: string;      // Used as display text for item and title for separator type
    state?: string;     // Router state
    icon?: string;      // Material icon name
    tooltip?: string;   // Tooltip text
    disabled?: boolean; // If true, item will not be appeared in sidenav.
    sub?: IChildItem[]; // Dropdown items
    badges?: IBadge[];
    active?: boolean;
}
export interface IChildItem {
    id?: string;
    parentId?: string;
    type?: string;
    name: string;       // Display text
    state?: string;     // Router state
    icon?: string;
    sub?: IChildItem[];
    active?: boolean;
}

interface IBadge {
    color: string;      // primary/accent/warn/hex color codes(#fff000)
    value: string;      // Display text
}

interface ISidebarState {
    sidenavOpen?: boolean;
    childnavOpen?: boolean;
}

@Injectable({
    providedIn: 'root'
})
export class NavigationService {
    public sidebarState: ISidebarState = {
        sidenavOpen: true,
        childnavOpen: false
    };
    selectedItem: IMenuItem;
    
    constructor() {
    }

    defaultMenu: IMenuItem[] = [
        {   
            name: "Umumiy ma'lumotlar",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            type: 'dropDown',
            icon: 'i-Bar-Chart',
            sub: [
                { icon: 'i-Clock-3', name: 'Xodimlar statistikasi', state: '/dashboard/v1', type: 'link' },
                { icon: 'i-Clock-4', name:"O'quvchilar statistikasi", state: '/dashboard/v2', type: 'link' }, 
                { icon: 'i-Clock', name: "Moliyaviy statistikalar", state: '/dashboard/v4', type: 'link' },
            ]
        },
        {
            name: 'Xodimlar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [ 
                { icon: 'i-Business-Man', name: 'Direktor', state: '/staff/director', type: 'link' },
                { icon: 'i-Administrator', name: 'Administrator', state: '/staff/administrator', type: 'link' },
                { icon: 'i-Business-ManWoman', name: "O'qituvchilar", state: '/staff/teachers', type: 'link' },
                { icon: 'i-Business-Mens', name: 'Boshqa xodimlar', state: '/staff/other-staff', type: 'link' },
                { icon: 'i-Add-User', name: "Xodim qo'shish", state: '/staff/add-staff', type: 'link' },
 
            ]
        },
        {
            name: "O'quvchilar",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [ 
                { icon: 'i-Split-Horizontal-2-Window', name: "O'quvchilar ro'yxati", state: '/students/students-table', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: "O'quvchi qo'shish", state: '/students/student-add', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: "Bitirgan o'quvchilar", state: '/students/students-graduate', type: 'link' }, 
 
            ]
        },
        {
            name: "Guruhlar",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [ 
                { icon: 'i-Split-Horizontal-2-Window', name: "Guruhlar ro'yxati", state: '/groups/group-table', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: "Guruh qo'shish", state: '/groups/group-add', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: "Bitirgan guruhlar", state: '/groups/group-graduate', type: 'link' },
 
            ]
        },

        {
            name: "Fanlar",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [ 
                { icon: 'i-Split-Horizontal-2-Window', name: "Fanlar ro'yxati", state: '/sciences/sciences-table', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: "Fan qo'shish", state: '/sciences/sciences-add', type: 'link' },
             ]
        },
        {
            name: "Dars jadvali",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [ 
                { icon: 'i-Split-Horizontal-2-Window', name: "Dars jadvali", state: '/lessons/lessons-table', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: "Xonalar jadvali", state: '/lessons/room-table', type: 'link' },
             ]
        },

        {
            name: "To'lovlar",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [ 
                { icon: 'i-Split-Horizontal-2-Window', name: "O'qituvchilar ish haqqi", state: '/payments/teachers-salary', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: "Xodimlar ish haqi", state: '/payments/staf-salary', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: "O'quvchilar to'lovi", state: '/payments/students-payments', type: 'link' },
             ]
        },

        {
            name: "Filiallar",
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
            type: 'dropDown',
            icon: 'i-Library',
            sub: [ 
                { icon: 'i-Split-Horizontal-2-Window', name: "Filiallar jadvali", state: '/branches/branches-table', type: 'link' },
                { icon: 'i-Split-Horizontal-2-Window', name: "Xonalar jadvali", state: '/branches/branches-add', type: 'link' },
             ]
        },


 
  
        // {
        //     name: 'Others',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        //     type: 'dropDown',
        //     icon: 'i-Double-Tap',
        //     sub: [
        //         { icon: 'i-Error-404-Window', name: 'Not found', state: '/others/404', type: 'link' }
        //     ]
        // } 
    ];

 
    menuItems = new BehaviorSubject<IMenuItem[]>(this.defaultMenu); 
    menuItems$ = this.menuItems.asObservable();
 
}
