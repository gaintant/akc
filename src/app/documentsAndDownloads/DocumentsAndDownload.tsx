import LinkDescription from "./LinksDescription";
import {linkSectionData} from './data'
import { LinkDetails, LinkSectionDetails } from "./types";
// const values = ["Value 1", "Value 2", "Value 3", "Value 4", "Value 5", "Value 6"];
// const LinkDetails = 
const DocumentsAndDownload = () => {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="mt-16 flex flex-col items-center gap-[0.125rem] w-full max-w-6xl">
                <h2 className="text-[2.5rem] font-semibold leading-[48px] tracking-[-0.04em] mb-6">
                    Documents &amp; Downloads
                </h2>
                {linkSectionData.map((value : LinkSectionDetails, index : number) =>(
                    <LinkDescription key={index} linkSectionDetails={value}/>
                ))}
            </div>
        </div>
    );
};
export default DocumentsAndDownload;