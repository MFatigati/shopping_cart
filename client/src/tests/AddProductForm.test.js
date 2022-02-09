import {render, screen} from "@testing-library/react"
import AddProductForm from "../components/AddProductForm"
//import userEvent from "@testing-library/user-event"

describe('Add Product Form', () => {
  let func;
/*   const exampleProduct = {
    id: "64f7s63a",
    title: "Kindle",
    price: 75,
    quantity: 3
  } */
  beforeEach(() => {
    func = jest.fn();
    render(<AddProductForm onAddProduct={func}/>)
  })

  it('has add product button', () => {
    const link = screen.getByRole('link', {name: /Add A Product/});
    expect(link).toBeInTheDocument();
  });
});