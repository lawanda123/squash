import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataRepositoryService {
  currentUser:any;

  constructor() {}

  getCatalog():Observable<any[]> {
    const subject = new Subject<any>();
    const currentUser = this.currentUser || {classes:[]};
    const catalogWithEnrollmentStatus =
    CLUB_CATALOG.map(catalogClass => {
        let enrolled = {enrolled: currentUser.classes.includes(catalogClass.classId)};
        return Object.assign(catalogClass, enrolled);
      });
    setTimeout(() => {subject.next(catalogWithEnrollmentStatus); subject.complete();}, 200);

    return subject;
  }

  saveUser(user): Observable<any> {
    user.classes = user.classes || [];
    this.currentUser = user;

    return Observable.empty().delay(1000);
  }

  enroll(classId): Observable<any> {
    if (!this.currentUser)
      return Observable.throw('User not signed in');

    if (this.currentUser.classes.includes[classId])
      return Observable.throw('Already enrolled');

    this.currentUser.classes.push(classId);

    return Observable.empty().delay(1000);
  }

  drop(classId): Observable<any> {
    if (!this.currentUser)
      return Observable.throw('User not signed in');

    if (!this.currentUser.classes.includes(classId))
      return Observable.throw('Not enrolled');

    this.currentUser.classes = this.currentUser.classes.filter(c => c.classId !== classId);

    return Observable.empty().delay(1000);
  }

  signIn(credentials): Observable<any> {
  
    if (credentials.email !== 'me@whitebeards.edu' || credentials.password !== 'super-secret')
      return Observable.throw('Invalid login');

    this.currentUser = {
      userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
      firstName: 'lawanda',
      lastName: 'yousef',
      email: 'loshashow@gmail.com',
      classes: ['24ab7b14-f935-44c1-b91b-8598123ea54a']
    };

    return Observable.empty();
  }
}

const CLUBS = [{
  clubName: 'PO101',
  address: '24 Active',
  creditHours: 3,
  description: '...'
}, {
  clubName: 'HIS105',
  address: 'GOO!',
  creditHours: 4,
  description: '...'
},{
  clubName: 'CH101',
  address: 'Malmö ff',
  creditHours: 4,
  description: '...'
},{
  clubName: 'CH205',
  address: 'ff the best',
  creditHours: 4,
  description: '...'
},{
  clubName: 'SP101',
  address: 'Sport World',
  creditHours: 4,
  description: '...'
},{
  clubName: 'SP201',
  address: 'My World',
  creditHours: 4,
  description: '...'
}];

const CLUB_CATALOG = [{
  classId: '24ab7b14-f935-44c1-b91b-8598123ea54a',
  club: CLUBS[0],
  Addr: 'Storgatan 22',
  seatsAvailable: 23,
  days: 'MWF',
  time:'10Am - 10Pm'
}, {
  classId: 'cebbc5ba-f49a-4708-b3dc-51a346b3231e',
  club: CLUBS[0],
  Addr: 'Brunnstavägen7',
  seatsAvailable: 9,
  days: 'MWF',
  time: '10Am - 10Pm'
}, {
  classId: '6130cdd4-071a-4559-8072-35f0fbec5516',
  club: CLUBS[0],
  Addr: 'Blekegatan33',
  seatsAvailable: 14,
  days: 'THF',
  time: '10Am - 10Pm'
}, {
  classId: 'dd0343e9-50b2-4f1d-8b87-93c0b34f3d35',
  club: CLUBS[1],
  Addr: 'Växelgatan 11',
  seatsAvailable: 28,
  days: 'THF',
  time: '10Am - 10Pm'
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  club: CLUBS[2],
  Addr: 'hostgatan 54',
  seatsAvailable: 28,
  days: 'THF',
  time: '10Am - 10Pm'
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  club: CLUBS[3],
  Addr: 'Järngatan 24',
  seatsAvailable: 28,
  days: 'THF',
  time: '10Am - 10Pm'
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  club: CLUBS[4],
  Addr: 'Malmö central',
  seatsAvailable: 28,
  days: 'THF',
  time: '10Am - 10Pm'
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  club: CLUBS[5],
  Addr: 'Malmö station',
  seatsAvailable: 28,
  days: 'THF',
  time: '10Am - 10Pm'
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  club: CLUBS[2],
  Addr: 'Fingatan 33',
  seatsAvailable: 28,
  days: 'THF',
  time: '10Am - 10Pm'
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  club: CLUBS[3],
  Addr: 'Summergatan65 33',
  seatsAvailable: 28,
  days: 'THF',
  time: '10Am - 10Pm'
},{
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  club: CLUBS[4],
  Addr: 'Jöngatan 19 22',
  seatsAvailable: 28,
  days: 'THF',
  time: '10Am - 10Pm'
}, {
  classId: '7277956e-795f-4c0f-9861-cf03635df5ea',
  club: CLUBS[5],
  Addr: 'Gergatan 31',
  seatsAvailable: 28,
  days: 'THF',
  time: '10Am - 10Pm'
}];


const USERS = [{
  userId: 'e61aebed-dbc5-437a-b514-02b8380d8efc',
  firstName: 'lawanda',
  lastName: 'yousef',
  email: 'loshashow@gmail.com',
  password: 'supersecret',
  classes: ['24ab7b14-f935-44c1-b91b-8598123ea54a']
}];
