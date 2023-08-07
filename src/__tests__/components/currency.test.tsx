import { render } from "@testing-library/react";
import { Currency } from "../../components/Currency";

describe('Currency', () => {
    it('return value with currrency format', () => {
        const { getByText } = render(
            <Currency value={25000} />
        );

        const formattedValue = getByText('$ 25.000');
        expect(formattedValue).toBeInTheDocument();
    })
}); 