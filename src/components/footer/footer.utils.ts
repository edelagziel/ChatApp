

export function currentDate():number
{
  const now=new Date();
  return now.getFullYear();
}

export function currentSec():number
{
  const now=new Date();
  return now.getMilliseconds();
}



