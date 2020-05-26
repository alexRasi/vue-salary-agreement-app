import {BehaviorSubject} from 'rxjs'

export default class MockSocketService {
    employeeChannel = new BehaviorSubject(undefined);
    employerChannel = new BehaviorSubject(undefined);

    listenEmployee() {
        return this.employeeChannel.asObservable();
    }

    listenEmployer() {
        return this.employerChannel.asObservable();
    }

    getEmployeeLastValue() {
        return this.employeeChannel.getValue();
    }

    getEmployerLastValue() {
        return this.employerChannel.getValue();
    }

    emitEmployeeSalary(salary) {
        this.employeeChannel.next(salary);
    }

    emitEmployerSalary(salary) {
        this.employerChannel.next(salary);
    }

    reset() {
        this.employerChannel.next(undefined);
        this.employeeChannel.next(undefined);
    }

}