import React, { useState } from 'react'

const Message = () => {

    const [message, setMessage] = useState('');
    const [result, setResult] = useState('');
    let visibilityState = result === '' ? 'hidden' : 'visible';

    const onSubmit = async (e) => {
      e.preventDefault();
      fetch('https://venturemindai.onrender.com/', {
        method: 'POST',
        headers: {
          "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      })
      .then((res) => res.json())
      .then((data) => setResult(data.message))
    }
  
    return (
      <div className='flex flex-col justify-center items-center lg:py-4 px-20 mx-auto max-w-screen-md'>
        <form onSubmit={onSubmit} className='w-4/5 pb-7 inline-block'>
          <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
              <textarea 
                class="block mx-4 p-2.5 w-full text-md text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                  <button type="submit" class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600">
                  <svg aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
                  <span class="sr-only">Send message</span>
              </button>
          </div>
      </form>
      <div style={{visibility: visibilityState}} className='flex items-center py-4 rounded-lg bg-gray-50 dark:bg-gray-700 px-4 w-4/5'>
        {result}
      </div>
    </div>
    )
}

export default Message;