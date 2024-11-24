import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  query, 
  where,
  onSnapshot,
  Timestamp,
  getDocs
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useAuth } from './AuthContext';

interface Company {
  id: string;
  name: string;
  industry: string;
  priority: 'High' | 'Medium' | 'Low';
  contacts: Contact[];
  lastEdited: string;
  userId: string;
}

interface Contact {
  id: string;
  name: string;
  avatar: string;
  selected?: boolean;
}

interface Task {
  id: string;
  name: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
  status: 'Done' | 'In progress' | 'To do';
  assignedTo?: string[];
  userId: string;
}

interface Industry {
  id: string;
  name: string;
  companies: string[];
  userId: string;
}

interface Message {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
  userId: string;
}

interface DataContextType {
  companies: Company[];
  tasks: Task[];
  industries: Industry[];
  addCompany: (company: Omit<Company, 'id' | 'lastEdited' | 'userId'>) => Promise<void>;
  updateCompany: (id: string, company: Partial<Company>) => Promise<void>;
  deleteCompany: (id: string) => Promise<void>;
  addTask: (task: Omit<Task, 'id' | 'userId'>) => Promise<void>;
  updateTask: (id: string, task: Partial<Task>) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
  addIndustry: (name: string) => Promise<void>;
  updateIndustry: (id: string, industry: Partial<Industry>) => Promise<void>;
  deleteIndustry: (id: string) => Promise<void>;
  loading: boolean;
  messages: Message[];
  addMessage: (message: Omit<Message, 'id' | 'userId'>) => Promise<void>;
  updateMessage: (id: string, message: Partial<Message>) => Promise<void>;
  deleteMessage: (id: string) => Promise<void>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const [companies, setCompanies] = useState<Company[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [industries, setIndustries] = useState<Industry[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setCompanies([]);
      setTasks([]);
      setIndustries([]);
      setMessages([]);
      setLoading(false);
      return;
    }

    const unsubscribeCompanies = onSnapshot(
      query(collection(db, 'companies'), where('userId', '==', user.uid)),
      (snapshot) => {
        const companiesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Company));
        setCompanies(companiesData);
      }
    );

    const unsubscribeTasks = onSnapshot(
      query(collection(db, 'tasks'), where('userId', '==', user.uid)),
      (snapshot) => {
        const tasksData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Task));
        setTasks(tasksData);
      }
    );

    const unsubscribeIndustries = onSnapshot(
      query(collection(db, 'industries'), where('userId', '==', user.uid)),
      (snapshot) => {
        const industriesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Industry));
        setIndustries(industriesData);
      }
    );

    const unsubscribeMessages = onSnapshot(
      query(collection(db, 'messages'), where('userId', '==', user.uid)),
      (snapshot) => {
        const messagesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        } as Message));
        setMessages(messagesData);
      }
    );

    setLoading(false);

    return () => {
      unsubscribeCompanies();
      unsubscribeTasks();
      unsubscribeIndustries();
      unsubscribeMessages();
    };
  }, [user]);

  const addCompany = async (company: Omit<Company, 'id' | 'lastEdited' | 'userId'>) => {
    if (!user) return;
    await addDoc(collection(db, 'companies'), {
      ...company,
      userId: user.uid,
      lastEdited: Timestamp.now()
    });
  };

  const updateCompany = async (id: string, company: Partial<Company>) => {
    const docRef = doc(db, 'companies', id);
    await updateDoc(docRef, { ...company, lastEdited: Timestamp.now() });
  };

  const deleteCompany = async (id: string) => {
    await deleteDoc(doc(db, 'companies', id));
  };

  const addTask = async (task: Omit<Task, 'id' | 'userId'>) => {
    if (!user) return;
    await addDoc(collection(db, 'tasks'), {
      ...task,
      userId: user.uid
    });
  };

  const updateTask = async (id: string, task: Partial<Task>) => {
    const docRef = doc(db, 'tasks', id);
    await updateDoc(docRef, task);
  };

  const deleteTask = async (id: string) => {
    await deleteDoc(doc(db, 'tasks', id));
  };

  const addIndustry = async (name: string) => {
    if (!user) return;
    await addDoc(collection(db, 'industries'), {
      name,
      companies: [],
      userId: user.uid
    });
  };

  const updateIndustry = async (id: string, industry: Partial<Industry>) => {
    const docRef = doc(db, 'industries', id);
    await updateDoc(docRef, industry);
  };

  const deleteIndustry = async (id: string) => {
    await deleteDoc(doc(db, 'industries', id));
  };

  const addMessage = async (message: Omit<Message, 'id' | 'userId'>) => {
    if (!user) return;
    await addDoc(collection(db, 'messages'), {
      ...message,
      userId: user.uid,
      timestamp: Timestamp.now()
    });
  };

  const updateMessage = async (id: string, message: Partial<Message>) => {
    const docRef = doc(db, 'messages', id);
    await updateDoc(docRef, message);
  };

  const deleteMessage = async (id: string) => {
    await deleteDoc(doc(db, 'messages', id));
  };

  const value = {
    companies,
    tasks,
    industries,
    addCompany,
    updateCompany,
    deleteCompany,
    addTask,
    updateTask,
    deleteTask,
    addIndustry,
    updateIndustry,
    deleteIndustry,
    loading,
    messages,
    addMessage,
    updateMessage,
    deleteMessage
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}