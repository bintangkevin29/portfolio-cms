import { useEffect, useState } from "react";
import { firebaseAuth } from "./firestore";

const useAuth = () => {
  const [user, setUser] = useState<firebase.User>();

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
    return unsubscribe();
  }, [firebaseAuth]);

  return user;
};

export default useAuth;
