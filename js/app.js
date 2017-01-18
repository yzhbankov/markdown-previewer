/**
 * Created by Iaroslav Zhbankov on 16.01.2017.
 */
const text = '# Heading\n=======\n\nSub-heading\n-----------\n' +
    ' \n### Another deeper heading\n \nParagraphs are separated\n' +
    'by a blank line.\n\nLeave 2 spaces at the end of a line to do a  \n' +
    'line break\n\nText attributes *italic*, **bold**, \n' +
    '`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n' +
    '  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n' +
    '  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n' +
    ' *[Herman Fassett](https://freecodecamp.com/hermanfassett)*';

var Markdown = React.createClass ({
    getInitialState: function(){
        return{
            text:text
        }
    },
    onChange: function(event){

    var textarea = event.target;
    this.setState({
        text:textarea.value
    });
        console.log(textarea.value);
},

    render: function() {
        return (
            <div className='row'>
                <div className='input col-md-6'><textarea onChange={this.onChange} type="text" className='frame'>
        {text}
    </textarea></div>
                <div className='output col-md-6' dangerouslySetInnerHTML={{__html: marked(this.state.text)}}></div>
            </div>
        );
    }
});

ReactDOM.render(
    <Markdown />,
    document.getElementsByClassName('container')[0]
);



