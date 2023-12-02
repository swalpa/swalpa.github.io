"use client";
import DOMPurify from "dompurify";
import { LucidePencilLine, LucideTrash2 } from "lucide-react";
import { useState } from "react";
import { UseFormSetValue } from "react-hook-form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ArrayInputField = (
    { label, placeholder, watchedValue, fieldName, setValue }:
    { label: string, placeholder: string, watchedValue: string[], fieldName: any, setValue: UseFormSetValue<any> }) => {
  
    const [field, setField] = useState<string | null>(null);
  
    const handleSetValues = (e: any) => {
      e.preventDefault();
      if (field && field !== "") {
        setValue(fieldName, [...watchedValue, field]);
        setField(null);
      }
    }
  
    return (
      <div className='mt-3 flex flex-col gap-y-2 my-2 p-2 px-3 bg-slate-50 border border-black/20 rounded-md'>
        <label className='font-semibold'>{label}*</label>
        <div className="">
          {
            watchedValue.length > 0 && (
              watchedValue.map((item: string, index: number) => (
                <ArrayInputDisplay key={index} watchedValue={watchedValue} setValue={setValue} index={index} item={item} fieldName={fieldName} />
              ))
            )
          }
        </div>
        <div className="flex gap-x-3">
          <Input value={!field ? "" : field} onChange={(e) => setField(e.target.value)} className='w-full text-lg' placeholder={placeholder} />
          <Button onClick={(e) => handleSetValues(e)}
            disabled={!field || field === ""}>
            Add
          </Button>
        </div>
      </div>
    )
  
  }

  export default ArrayInputField;
  
  const ArrayInputDisplay = (
    { watchedValue, setValue, index, item, fieldName }:
    { watchedValue: string[], setValue: UseFormSetValue<any>, index: number, item: string, fieldName: any }) => {
  
    const [edit, setEdit] = useState<boolean>(false);
    const [editedValue, setEditedValue] = useState<string>(item);
  
    return (
      <div key={index} className="group p-1 min-h-[40px] rounded-sm flex gap-2 mt-1 items-center hover:bg-slate-200">
        <p className="">{index + 1}.</p>
        {
          edit ? (
            <div className="flex gap-x-2 w-full">
              <Input className='text-lg' value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />
              <Button disabled={!editedValue || editedValue === ""} onClick={(e) => { e.preventDefault(); setValue(`${fieldName}.${index}`, editedValue); setEdit(false) }}>Done</Button>
            </div>
          ) : (
            <>
              <div key={index} className="w-[85%] text-justify border-b border-black/10 pb-1" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(item) }} />
              <div onClick={() => setEdit(true)}
                className="p-1 hidden group-hover:block hover:bg-slate-200 rounded-full transition hover:cursor-pointer"><LucidePencilLine /></div>
              <div onDoubleClick={() => setValue(fieldName, watchedValue.filter((_, i) => i !== index))}
                className="p-1 hidden group-hover:block hover:bg-red-200 rounded-full transition hover:cursor-pointer"><LucideTrash2 className="text-red-600" /></div>
            </>
          )
        }
      </div>
    )
  }