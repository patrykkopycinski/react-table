import {
    getColumnsCSVContent,
    getRowsWithExistingColumns,
    getRowsCSVContent,
} from './csvutils';

describe('getColumnsCSVContent', () => {
    it('should return proper string', () => {
        const payload = {
            "product": "Product (100g serving)",
            "calories": "Calories",
            "fat": "Fat (g)",
            "protein": "Protein (g)",
            "414e6d36-25d3-4a3f-ba33-afaaa7a40a18": "",
            "e3fa5e21-34c7-46de-8aac-ae9885ffe13f": "",
        }
        const output = getColumnsCSVContent(Object.entries(payload));
    
        expect(output).toEqual('Product (100g serving),Calories,Fat (g),Protein (g),,\n');
    });
});

describe('getRowsWithExistingColumns', () => {
    it('should return proper array of arrays', () => {
        const columns = {
            "product": "Product (100g serving)",
            "calories": "Calories",
            "protein": "Protein (g)",
        }
        const rows = {
            "9173387d-9b05-49cb-a9e0-9d9090300a31": {
                "product": "product",
                "fat": "fat",
                "calories": "calories"
            },
            "53c34ab8-912f-4be2-8426-5d1a14e33fd6": {
                "calories": "calories"
            },
            "6b9ebc4a-128d-4a16-9c7f-9b9750b915ff": {},
        };
        const output = getRowsWithExistingColumns(rows, Object.entries(columns));
    
        expect(output[0]).toEqual(["product", "calories", undefined]);
        expect(output[1]).toEqual([undefined, "calories", undefined]);
        expect(output[2]).toEqual([undefined, undefined, undefined]);
    });
});

describe('getRowsCSVContent', () => {
    it('should return proper array of arrays', () => {
        const payload = [
            ["product", "calories", undefined],
            [undefined, "calories", undefined],
            [undefined, undefined, undefined]
        ];

        const output = getRowsCSVContent(payload);

        expect(output).toEqual('product,calories,\n,calories,\n,,\n')
    });
});
