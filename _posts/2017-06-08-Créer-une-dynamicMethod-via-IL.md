# Code généric
{% highlight csharp %}
public static T CreateDelegate<T>(this DynamicMethod dynamicMethod) where T : class => dynamicMethod.CreateDelegate(typeof(T)) as T;

public static T CreateDynamicMethod<T>(string methodName, Action<ILGenerator> generator) where T : class
        {
            var methodType = typeof(T).GetMethod("Invoke");
            Type[] parameterTypes = methodType.GetParameters().Select(p => p.ParameterType).ToArray();
            Type returnType = methodType.ReturnType;

            DynamicMethod dynamicMethod = new DynamicMethod("callEmitted", returnType, parameterTypes);

            generator(dynamicMethod.GetILGenerator());

            return dynamicMethod.CreateDelegate<T>();
        }
{% endhighlight %}

# Utilisation
{% highlight csharp %}
 Action method = CreateDynamicMethod<Action>("HelloWorldMethod",
                    iLGenerator =>
                    {
                        iLGenerator.EmitWriteLine("Hello, World !"); // call Console.WriteLine
                        iLGenerator.Emit(OpCodes.Ret); // end of method
                    });
                    
 method(); // display on console "Hello World !"
{% endhighlight %}
