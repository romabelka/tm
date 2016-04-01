import { fromJS } from 'immutable'

export const employees = fromJS({
    1: {
        id: '1',
        name: 'Roma',
        email: 'example@google.com',
        projects: {
            11: {
                startDate: new Date('03/20/2016'),
                endDate: new Date('04/05/2016')
            },
            12: {
                startDate: new Date('04/01/2016'),
                endDate: new Date('04/20/2016')
            }
        }
    },
    2: {
        id: '2',
        name: 'Oleg',
        email: 'mail@example.com',
        projects: {
            11: {
                startDate: new Date('04/01/2016'),
                endDate: new Date('04/10/2016')
            }
        }
    }
})
/**
 * saving relations in users allow to get one source of truth.
 * You can still get users in project with O(n) employees.filter(u => u.getIn(['projects', projId]))
 */
export const projects = fromJS({
    11: {
        id: '11',
        name: 'site',
        startData: new Date('03/20/2016'),
        endDate: new Date('04/10/2016')
    },
    12: {
        id: '12',
        name: 'advertisement',
        startData: new Date('04/01/2016'),
        endDate: new Date('05/10/2016')
    }
})