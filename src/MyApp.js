// contoh 1

// function MyButton() {
//   return (
//     <button>
//       Saya adalah tombol
//     </button>
//   );
// }

// export default function MyApp() {
//     return (
//       <div>
//         <h1>Selamat datang di aplikasi saya</h1>
//         <MyButton />
//       </div>
//     );
//   }

// contoh 2
// const user = {
//   name: 'Hedy Lamarr',
//   imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imageSize: 90,
// };

// export default function Profile() {
//   return (
//     <>
//       <h1>{user.name}</h1>
//       <img
//         className="avatar"
//         src={user.imageUrl}
//         alt={'Foto ' + user.name}
//         style={{
//           width: user.imageSize,
//           height: user.imageSize
//         }}
//       />
//     </>
//   );
// }

// contoh 3

// const products = [
//   { title: 'Kubis', isFruit: false, id: 1 },
//   { title: 'Bawang Putih', isFruit: false, id: 2 },
//   { title: 'Apel', isFruit: true, id: 3 },
// ];

// export default function ShoppingList() {
//   const listItems = products.map(product =>
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruit ? 'magenta' : 'darkgreen'
//       }}
//     >
//       {product.title}
//     </li>
//   );

//   return (
//     <ul>{listItems}</ul>
//   );
// }

// contoh 4

// import { useState } from 'react';

// function MyButton() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <button onClick={handleClick}>
//       Diklik {count} kali
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Penghitung yang diperbarui secara terpisah</h1>
//       <MyButton />
//       <MyButton />
//     </div>
//   );
// }




// contoh 5

import { useState } from "react";


export default function MyApp() {
  const [count, setCount] = useState(0);


  function handleClick(){
    setCount(count+1);
  }


  function MyButton({count, onClick}) {
    return (
      <button onClick={onClick}>
        Diklik {count} kali
      </button>
    )
  }

  return (
    <div>
      <h1>Counter that update togheter</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  )
}




