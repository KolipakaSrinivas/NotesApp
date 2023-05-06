
import ReactMde from "react-mde"
// import Showdown from 'react-showdown'

function Editor() {



    // const converter = new Showdown.Converter({
    //     tables: true,
    //     simplifiedAutoLink: true,
    //     strikethrough: true,
    //     tasklists: true,
    // })  






    return(
        <section className="pane editor">
            <ReactMde
            //    value={currentNote.body}
            //    onChange={updateNote}
            //    selectedTab={selectedTab}
            //    onTabChange={setSelectedTab}
            //    generateMarkdownPreview={(markdown) =>
                //    Promise.resolve(converter.makeHtml(markdown))
            //    }
            //    minEditorHeight={80}
            //    heightUnits="vh"
            />
        </section>
    )
}

export default Editor