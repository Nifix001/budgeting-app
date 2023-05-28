import { useRef } from "react";
import { useFetcher } from "react-router-dom"

const AddExpenseForm = ({ budgets }) => {
  const fetcher = useFetcher();

  const formRef = useRef();

  return (
    <div className="form-wrapper">
      <h2 className="h3">Add New <span className="accent">
        {budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}
        </span> {" "}
        Expense
        </h2>
        <fetcher.Form
        method="post"
        className="grid-sm"
        ref={formRef}
        >

        </fetcher.Form>
    </div>
  )
}

export default AddExpenseForm
