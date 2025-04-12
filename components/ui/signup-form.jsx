'use dom';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'expo-router';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignupForm({ data }) {
  const [showAdditionalFields, setShowAdditionalFields] =
    useState(false);

  const [fields, setFields] = useState({
    email: '',
    password: '',
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    sex: '',
    phoneNumber: '',
  });

  useEffect(() => {
    console.log('Updated form data:', data);
    setFields((prev) => ({
      ...prev,
      firstName: data?.fName || '',
      middleName: data?.mName || '',
      lastName: data?.lName || '',
      dateOfBirth: data?.DOB || '',
      placeOfBirth: data?.POB || '',
      sex: data?.sex || '',
    }));
  }, [data]);

  const handleInputChange = (field, value) => {
    setFields((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', fields);
    // TODO: Add form submission logic here (e.g., API call)
  };

  return (
    <div className={cn('flex flex-col gap-6')}>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-xl">
            Create your account
          </CardTitle>
          <CardDescription>Sign up with your details</CardDescription>
        </CardHeader>
        <CardContent className="w-full">
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              {/* EMAIL */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="user@example.com"
                  required
                  onChange={(e) =>
                    handleInputChange('email', e.target.value)
                  }
                />
              </div>
              {/* PASSWORD */}
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                  onChange={(e) =>
                    handleInputChange('password', e.target.value)
                  }
                />
              </div>
              {/* TOGGLE BUTTON */}
              <Button
                variant="outline"
                className="w-full"
                onClick={(e) => {
                  e.preventDefault();
                  setShowAdditionalFields((prev) => !prev);
                }}
              >
                {showAdditionalFields
                  ? 'Hide Additional Fields'
                  : 'Show Additional Fields'}
              </Button>

              {/* COLLAPSIBLE INPUTS */}
              {showAdditionalFields && (
                <div className="grid gap-6">
                  {[
                    { id: 'firstName', label: 'First Name' },
                    { id: 'middleName', label: 'Middle Name' },
                    { id: 'lastName', label: 'Last Name' },
                    { id: 'dateOfBirth', label: 'Date of Birth' },
                    { id: 'placeOfBirth', label: 'Place of Birth' },
                    { id: 'sex', label: 'Sex' },
                    { id: 'phoneNumber', label: 'Phone Number' },
                  ].map(({ id, label }) => (
                    <div className="grid gap-2" key={id}>
                      <Label htmlFor={id}>{label}</Label>
                      <Input
                        id={id}
                        type="text"
                        required
                        onChange={(e) =>
                          handleInputChange(id, e.target.value)
                        }
                      />
                    </div>
                  ))}
                </div>
              )}
              {/* SIGNUP BUTTON */}
              <Button type="submit" className="w-full">
                Signup
              </Button>
              {/* OR CONTINUE WITH */}
              <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span className="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={(e) => e.preventDefault()}
              >
                <img
                  width="20"
                  height="20"
                  src="https://img.icons8.com/ios-filled/50/identification-documents.png"
                  alt="identification-documents"
                />
                <Link href={'/qr-scanner'} style={{ color: 'black' }}>
                  Signup with ID
                </Link>
              </Button>
            </div>
            <div className="text-center text-sm">
              Already have an account?{' '}
              <a
                href="/login"
                className="underline underline-offset-4"
              >
                Login
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
      <div className="text-center text-xs text-muted-foreground">
        SwiftDocs © 2025. All Rights Reserved.® | Empowering Your
        Documentation Needs | Built for Efficiency and Simplicity.
      </div>
    </div>
  );
}
