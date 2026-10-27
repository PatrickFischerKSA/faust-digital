export function download(content:string,type:string,name:string){
  const a=document.createElement('a');
  const url=URL.createObjectURL(new Blob([content],{type}));
  a.href=url;a.download=name;a.click();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
}
