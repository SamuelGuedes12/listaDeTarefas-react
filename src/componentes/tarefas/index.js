import React from 'react'
import './tarefas.css'
import { FaEdit, FaWindowClose} from 'react-icons/fa';
import PropTypes from 'prop-types';


export default function Tarefas({handleDelete, handleEdit, tarefas}) {
  return (
<ul className="tarefas">
          {tarefas.map((tarefa, index,) => (
            <li key={ tarefa }>{tarefa}
            <span>
              <FaEdit onClick={(e) => handleEdit(e, index)} className="edit"/>
              <FaWindowClose onClick={(e) => handleDelete(e, index)} className="close"/>
            </span>
            </li>
          ))}
        </ul>
  )
}

Tarefas.propTypes = {
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
  tarefas: PropTypes.array.isRequired
}
