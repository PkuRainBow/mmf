(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(10),o=(a(0),a(174)),c={id:"m4c",sidebar_label:"M4C",title:"Iterative Answer Prediction with Pointer-Augmented Multimodal Transformers for TextVQA"},i={id:"projects/m4c",title:"Iterative Answer Prediction with Pointer-Augmented Multimodal Transformers for TextVQA",description:"This project page shows how to use M4C model from the following paper, released under the MMF:",source:"@site/docs/projects/m4c.md",permalink:"/docs/projects/m4c",editUrl:"https://github.com/facebookresearch/mmf/edit/master/website/docs/projects/m4c.md",lastUpdatedBy:"Amanpreet Singh",lastUpdatedAt:1592369824,sidebar_label:"M4C",sidebar:"docs",previous:{title:"BUTD",permalink:"/docs/projects/butd"},next:{title:"MoViE+MCAN (VQA 2020 Challenge Winner)",permalink:"/docs/projects/movie_mcan"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Notes about data",id:"notes-about-data",children:[]},{value:"Pretrained M4C Models",id:"pretrained-m4c-models",children:[]},{value:"Training and Evaluation",id:"training-and-evaluation",children:[]}],b={rightToc:l};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This project page shows how to use M4C model from the following paper, released under the MMF:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"R. Hu, A. Singh, T. Darrell, M. Rohrbach, ",Object(o.b)("em",{parentName:"li"},"Iterative Answer Prediction with Pointer-Augmented Multimodal Transformers for TextVQA"),". in CVPR, 2020 (",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://arxiv.org/pdf/1911.06258.pdf"}),"PDF"),")")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"@inproceedings{hu2020iterative,\n  title={Iterative Answer Prediction with Pointer-Augmented Multimodal Transformers for TextVQA},\n  author={Hu, Ronghang and Singh, Amanpreet and Darrell, Trevor and Rohrbach, Marcus},\n  booktitle={Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition},\n  year={2020}\n}\n")),Object(o.b)("p",null,"Project Page: ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://ronghanghu.com/m4c"}),"http://ronghanghu.com/m4c")),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"Install MMF following the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://mmf.sh/docs/getting_started/installation/"}),"installation guide"),"."),Object(o.b)("p",null,"This will install all M4C dependencies such as ",Object(o.b)("inlineCode",{parentName:"p"},"transformers")," and ",Object(o.b)("inlineCode",{parentName:"p"},"editdistance")," and will also compile the python interface for PHOC features."),Object(o.b)("h2",{id:"notes-about-data"},"Notes about data"),Object(o.b)("p",null,"This repo supports training and evaluation of the M4C model under three datasets: TextVQA, ST-VQA, and OCR-VQA. As you run a command, these datasets and the requirements would be automatically downloaded for you."),Object(o.b)("p",null,"For the ST-VQA dataset, we notice that many images from COCO-Text in the downloaded ST-VQA data (around 1/3 of all images) are resized to 256\xd7256 for unknown reasons, which degrades the image quality and distorts their aspect ratios. In the released object and OCR features below, we replaced these images with their original versions from COCO-Text as inputs to object detection and OCR systems."),Object(o.b)("p",null,"The released imdbs contain OCR results and normalized bounding boxes (i.e. in the range of ",Object(o.b)("inlineCode",{parentName:"p"},"[0,1]"),") of each detected objects (under ",Object(o.b)("inlineCode",{parentName:"p"},"obj_normalized_boxes")," key) and OCR tokens (under ",Object(o.b)("inlineCode",{parentName:"p"},"ocr_normalized_boxes")," key). Note that the answers in ST-VQA and OCR-VQA imdbs are tiled (duplicated) to 10 answers per question to make its format consistent with the TextVQA imdbs."),Object(o.b)("p",null,"For the TextVQA dataset, the downloaded file contains both imdbs with the Rosetta-en OCRs (better performance) and imdbs with Rosetta-ml OCRs (same OCR results as in the previous ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://openaccess.thecvf.com/content_CVPR_2019/papers/Singh_Towards_VQA_Models_That_Can_Read_CVPR_2019_paper.pdf"}),"LoRRA")," model). Please download the corresponding OCR feature files."),Object(o.b)("p",null,"Note that the object Faster R-CNN features are extracted with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../tools/scripts/features/extract_features_vmb.py"}),Object(o.b)("inlineCode",{parentName:"a"},"extract_features_vmb.py"))," and the OCR Faster R-CNN features are extracted with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../../projects/M4C/scripts/extract_ocr_frcn_feature.py"}),Object(o.b)("inlineCode",{parentName:"a"},"extract_ocr_frcn_feature.py")),"."),Object(o.b)("h2",{id:"pretrained-m4c-models"},"Pretrained M4C Models"),Object(o.b)("p",null,"We release the following pretrained models for M4C on three datasets: TextVQA, ST-VQA, and OCR-VQA."),Object(o.b)("p",null,"For the TextVQA dataset, we release three versions: M4C trained with ST-VQA as additional data (our best model) with Rosetta-en, M4C trained on TextVQA alone with Rosetta-en, and M4C trained on TextVQA alone with Rosetta-ml (same OCR results as in the previous ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://openaccess.thecvf.com/content_CVPR_2019/papers/Singh_Towards_VQA_Models_That_Can_Read_CVPR_2019_paper.pdf"}),"LoRRA")," model)."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Datasets"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Config Files (under ",Object(o.b)("inlineCode",{parentName:"th"},"projects/m4c/configs"),")"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Pretrained Model Key"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Metrics"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextVQA (",Object(o.b)("inlineCode",{parentName:"td"},"textvqa"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"textvqa/join_with_stvqa.yaml")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"m4c.textvqa.with_stvqa")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"val accuracy - 40.55%; test accuracy - 40.46%"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rosetta-en OCRs; ST-VQA as additional data")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextVQA (",Object(o.b)("inlineCode",{parentName:"td"},"textvqa"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"textvqa/defaults.yaml")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"m4c.textvqa.alone")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"val accuracy - 39.40%; test accuracy - 39.01%"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rosetta-en OCRs")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"TextVQA (",Object(o.b)("inlineCode",{parentName:"td"},"textvqa"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"textvqa/ocr_ml.yaml")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"m4c.textvqa.ocr_ml"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"val accuracy - 37.06%"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rosetta-ml OCRs")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ST-VQA (",Object(o.b)("inlineCode",{parentName:"td"},"stvqa"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"stvqa/defaults.yaml")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"m4c.stvqa.defaults")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"val ANLS - 0.472 (accuracy - 38.05%); test ANLS - 0.462"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rosetta-en OCRs")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"OCR-VQA (",Object(o.b)("inlineCode",{parentName:"td"},"ocrvqa"),")"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"ocrvqa/defaults.yaml")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"m4c.ocrvqa.defaults")),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"val accuracy - 63.52%; test accuracy - 63.87%"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Rosetta-en OCRs")))),Object(o.b)("h2",{id:"training-and-evaluation"},"Training and Evaluation"),Object(o.b)("p",null,"Please follow the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://mmf.sh/docs/getting_started/quickstart#training"}),"MMF documentation")," for the training and evaluation of the M4C model on each dataset."),Object(o.b)("p",null,"For example:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"to train the M4C model on the TextVQA training set:")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mmf_run dataset=textvqa \\\n  model=m4c \\\n  config=projects/m4c/configs/textvqa/defaults.yaml \\\n  env.save_dir=./save/m4c\n")),Object(o.b)("p",null,"(Replace ",Object(o.b)("inlineCode",{parentName:"p"},"textvqa")," with other datasets and ",Object(o.b)("inlineCode",{parentName:"p"},"projects/m4c/configs/textvqa/defaults.yaml")," with other config files to train with other datasets and configurations. See the table above. You can also specify a different path to ",Object(o.b)("inlineCode",{parentName:"p"},"env.save_dir")," to save to a location you prefer.)"),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},"To evaluate the pretrained M4C model locally on the a TextVQA's validation set (assuming that the pretrained model that you are evaluating is ",Object(o.b)("inlineCode",{parentName:"li"},"m4c.textvqa.with_stvqa"),"):")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mmf_run dataset=textvqa \\\n  model=m4c \\\n  config=projects/m4c/configs/textvqa/defaults.yaml \\\n  env.save_dir=./save/m4c \\\n  run_type=val \\\n  checkpoint.resume_zoo=m4c.textvqa.with_stvqa\n")),Object(o.b)("p",null,"As with training, you can replace ",Object(o.b)("inlineCode",{parentName:"p"},"dataset"),", ",Object(o.b)("inlineCode",{parentName:"p"},"config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"checkpoint.resume_zoo")," according to the setting you want to evaluate."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Use ",Object(o.b)("inlineCode",{parentName:"p"},"checkpoint.resume=True")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"checkpoint.resume_zoo=m4c.textvqa.with_stvqa")," to evaluate your trained snapshots."))),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Follow ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://mmf.sh/docs/tutorials/checkpointing"}),"checkpointing")," tutorial to understand more fine-grained details of checkpoint, loading and resuming in MMF"))),Object(o.b)("ol",{start:3},Object(o.b)("li",{parentName:"ol"},"to generate the EvalAI prediction files for the TextVQA test set (assuming you are evaluating the pretrained model ",Object(o.b)("inlineCode",{parentName:"li"},"m4c.textvqa.with_stvqa"),"):")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"mmf_predict dataset=textvqa \\\n  model=m4c \\\n  config=projects/m4c/configs/textvqa/defaults.yaml \\\n  env.save_dir=./save/m4c \\\n  run_type=test \\\n  checkpoint.resume_zoo=m4c.textvqa.with_stvqa\n")),Object(o.b)("p",null,"As before, for generating prediction for other pretrained model for TextVQA, replace ",Object(o.b)("inlineCode",{parentName:"p"},"config")," and ",Object(o.b)("inlineCode",{parentName:"p"},"checkpoint.resume_zoo")," according to the setting you want in the table."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"To generate predictions on val set, use ",Object(o.b)("inlineCode",{parentName:"p"},"run_type=val")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"run_type=test"),". As before, to generate predictions for your checkpoint, use ",Object(o.b)("inlineCode",{parentName:"p"},"checkpoint.resume=True")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"checkpoint.resume_zoo=m4c.textvqa.with_stvqa"),"."))))}s.isMDXComponent=!0},174:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,O=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return a?r.a.createElement(O,i(i({ref:t},b),{},{components:a})):r.a.createElement(O,i({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);