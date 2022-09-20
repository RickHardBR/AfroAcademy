import styles from './Task.module.scss'

import { Check, Trash } from 'phosphor-react'

export function Task({isDone, onCheck,content, onRemove }) {
  
  const styleIsDone = isDone ? styles.done : ''

  return (
    <li className={styles.task}>
      <label>
        <input
          type="checkbox"
          aria-label="Check"
          checked={isDone}
          onChange={onCheck}
        />
        <span>
          <Check />
        </span>
      </label>
      <p className={styleIsDone}>
        {content}
        </p>
      <button onClick={onRemove}>
        <Trash />
      </button>
    </li>
  )
}
