import { FETCH_ALL, START, SUCCESS, FAIL } from '../constants'
import { parseDates } from '../utils'

export function fetchAll() {
    return (dispatch, store) => {
        dispatch({
            type: FETCH_ALL + START
        })
        Promise
            .all([
                fetch('https://glowing-torch-1158.firebaseio.com/employees.json'),
                fetch('https://glowing-torch-1158.firebaseio.com/projects.json')
            ])
            .then((responses) => Promise.all(responses.map(res => res.json())))
            .then(
                jsons => dispatch({
                    type: FETCH_ALL + SUCCESS,
                    data: {
                        employees: parseDates(jsons[0]),
                        projects: parseDates(jsons[1])
                    }
                }),
                errors => dispatch({
                    type: FETCH_ALL + FAIL,
                    errors: errors
                })
            )
    }
}