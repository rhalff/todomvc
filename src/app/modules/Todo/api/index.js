import { API } from './constants'
import { apiFetch } from '../../../../shared/utils/api'

class TodoApi {
  static getAllTodos(query = {}, fetchingFrom = 'client') {
    return apiFetch(API.TODO.TODOS, { fetchingFrom }, query)
  }
}

export default TodoApi
