const Component = require("../../../lib/components/Component");

class StubComponent extends Component {
    render() {
        return "stub_component";
    }
}

describe('Component', () => {
    it('should throw an error when calling render on a Component', () => {
        // setup
        const component = new Component();

        // execution/verify
        expect(() => {
            const result = component.render();
        }).toThrow();
    });

    describe('renderInnerHTML', () => {
        it('should pass through a string child', () => {
            // setup
            const component = new Component(['test string']);

            // executation
            const result = component.renderInnerHTML();

            // verify
            expect(result).toEqual('test string');
        });

        it('should join together multiple children into a single string', () => {
            // setup
            const component = new Component(['test string', "item 2"]);

            // executation
            const result = component.renderInnerHTML();

            // verify
            expect(result).toEqual('test string item 2');
        });

        it('should call render on a component child', () => {
            const component = new Component([new StubComponent()]);

            // executation
            const result = component.renderInnerHTML();

            // verify
            expect(result).toEqual('stub_component');
        });
    });
});