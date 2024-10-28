#include<iostream>
#include<math.h>

template<typename keyType,typename valueType>
class mapp {
    valueType *data;
    int *position;
    int size;

public:
    mapp(int n) {
        data = new valueType[n];
        position = new int[n];
        for (int i = 0; i < n;i++) {
            data[i] = -1;
        }
        size = n;
    }

    int computeHash(valueType& value) {
        // std::cout << (std::to_string(value).length() * 26 + 5) % size << std::endl;
        return (std::to_string(value).length() + value + 27 * 23 * 19) % size;
    }

    void insert(keyType key,valueType value) {
        int pos = computeHash(key);
        int x = pos;
        do{
            if(data[pos] == -1) {
                data[pos] = value;
                position[pos] = pos;
                return;
            }
            pos = (pos + 1) % size;
            std::cout << size << " "<<pos<<std::endl;
        } while (x != pos);
    }

    int get(keyType key) {
        int pos = computeHash(key);
        if(data[position[pos]]==-1) {
            return 0;
        }
        return data[position[pos]];
    }

    ~mapp() {
        delete[] data;
    }
};


int main() {
    mapp<int, int> m(5);

    m.insert(0, 1);
    // m.insert(1, 2);
    // m.insert(2, 3);
    // m.insert(3, 4);
    // m.insert(4, 5);

    std::cout << m.get(0);
    std::cout << m.get(1);
    std::cout << m.get(2);
    std::cout << m.get(3);
    std::cout << m.get(4);

    return 0;
}