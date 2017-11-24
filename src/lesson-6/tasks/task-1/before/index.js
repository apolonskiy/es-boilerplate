import {
    addEntity as add,
    getEntityTotalviews,
    getEntitiesSortedByPopularity
} from '../after/dataManager';

import Entity from '../after/entityManager';

// Create instance for man
const man = new Entity({
    id: 0,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 21,
    sex: 'male',
    social: [
        {
            id: 1,
            title: 'facebook',
            views: 21
        },
        {
            id: 2,
            title: 'youtube',
            views: 23
        },
        {
            id: 3,
            title: 'twitter',
            views: 2
        }
    ]
});

const woman = new Entity({
    id: 1,
    firstName: 'Ela',
    lastName: 'Nelson',
    age: 50,
    sex: 'female',
    social: [
        {
            id: 4,
            title: 'qqq',
            views: 1
        },
        {
            id: 5,
            title: 'aaa',
            views: 2
        },
        {
            id: 6,
            title: 'zzz',
            views: 3
        }
    ]
});
const child = new Entity({
    id: 2,
    firstName: 'ololo',
    lastName: 'Nelqqqson',
    age: 5,
    sex: 'female',
    social: [
        {
            id: 7,
            title: 'qqq',
            views: 20
        },
        {
            id: 8,
            title: 'aaa',
            views: 10
        },
        {
            id: 9,
            title: 'zzz',
            views: 5
        }
    ]
});

// Get data for man
const firstEntity = man.getEntity();

const secondEntity = woman.getEntity();

const thirdEntity = child.getEntity();
// Add man to collection
add(firstEntity);

add(secondEntity);

add(thirdEntity);

const totalViews1 = getEntityTotalviews();
console.log(totalViews1); // 46
//
const totalViews2 = getEntityTotalviews([1, 3]);
console.log(totalViews2); // 23
//
const totalViews3 = getEntityTotalviews(['facebook', 'twitter']);
console.log(totalViews3); // 23
//
const totalViews4 = getEntityTotalviews(null, total => total * 3);
console.log(totalViews4); // 138
//
const entitiesSorted = getEntitiesSortedByPopularity();
