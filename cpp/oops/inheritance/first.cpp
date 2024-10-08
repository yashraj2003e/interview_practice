#include<bits/stdc++.h>
using namespace std;

class Person {
    protected:
        string name;
        int id;
};


/*
public Person
=> all the public members remain public
=> all the protected members remain protected
=> all the private members remain private


protected Person
=> all the public members become protected
=> all the protected members remain protected
=> all the private members remain private


private Person
=> all the public members become private
=> all the protected members become private
=> all the private members remain private
*/

class Student : public Person {
    private:
        int marks;
    public:
        Student(string name,int id,int marks) {
            this->name = name;
            this->id = id;
            this->marks = marks;
        }

        void print() {
            cout << name << " " << id << " " << marks << endl;
        }
};

int main() {
    Student s("Yashraj",1,100);
    s.print();
}